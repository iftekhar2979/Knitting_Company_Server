const express = require('express')
const config = require('./src/config/config.js');
const port = config.PORT;
const { PrismaClient, Prisma } = require('@prisma/client');
// const http = require('http');
const cors = require("cors")
let cookieParser = require('cookie-parser')
var morgan = require('morgan')
const bcrypt = require("bcryptjs")

const companyRouter = require('./Routes/CompanyRoute/companyRoute')
const orderRouter = require('./Routes/OrderRoute/orderRoute')
const deliveryRoute = require('./Routes/DeliveryRoute/deliveryRoute')
const userRoute = require('./Routes/UserRoute/userRoute')
const buyerRoute = require("./Routes/BuyerRoute/buyerRoute")
const productRoute = require("./Routes/ProductRoute/productRoute")
const orderDetails = require("./Routes/OrderRoute/OrderDetailsRoute/orderDetailsRoute")
const yarnDetails = require('./Routes/OrderRoute/YarnRoute/yarnDetailsRoute')
const invoiceRoute = require("./Routes/InvoiceRoute/invoiceRoute")
const deliveryManRoute = require("./Routes/EmployeeRoute/deliveryManRoute")
const dashboardRoute = require("./Routes/Dashboard/dashboardRoute");
const { generateHashedPassword } = require('./utils/generateHashedPassword.js');
const { verifyEmailConnection } = require('./utils/mail.js');

// const { initSocket } = require('./socket');
const app = express();
// const server = http.createServer(app);
app.use(express.json())
const prisma = new PrismaClient();
let corsOptions;
if (config.NODE_ENV === "Production") {
  corsOptions = {
    credentials: true, origin: config.ORIGIN_URL
  };
} else {
  corsOptions = {
    credentials: true, origin: true
  };
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(morgan('tiny'))

app.get('/api', async (req, res) => {
  try {
    await prisma.$connect();
     // Explicitly attempt to connect to the DB
    res.status(200).send('Database connection is successful.');
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send({ message: 'Failed to connect to the database.', error });
  } finally {
    await prisma.$disconnect(); // Clean up connection
  }
})
// app.use(cors())
app.use(companyRouter)
app.use(orderRouter)
app.use(deliveryRoute)
app.use(userRoute)
app.use(buyerRoute)
app.use(productRoute)
app.use(orderDetails)
app.use(yarnDetails)
app.use(invoiceRoute)
app.use(deliveryManRoute)
app.use(dashboardRoute)

// initSocket(server);
// DB Connection Check Route
app.get('/check-db', async (req, res) => {
  try {
    await prisma.$connect(); // Explicitly attempt to connect to the DB
    res.status(200).send('Database connection is successful.', config.DATABASE_URL);
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send({ message: 'Failed to connect to the database.', error });
  } finally {
    await prisma.$disconnect(); // Clean up connection
  }
});

async function seedAdmin(){
  const hashedPassword = await generateHashedPassword(config.ADMIN_PASSWORD); // Hash the password
  // Check if an admin already exists to prevent duplicates
  const adminExists = await prisma.user.findUnique({
    where: { email: config.ADMIN_EMAIL }
  });

  if (!adminExists) {
    await prisma.user.create({
      data: {
        name: config.ADMIN_NAME,
        email: config.ADMIN_EMAIL,
        password: hashedPassword,
        isAdmin: true,  // Assign the role of Admin,
        role:config.ADMIN_ROLE
      },
    });
}
}

const startServer = async () => {
    console.log('--- Initializing Server ---');

    // 1. Check Database Connection with Retry Logic
    let dbConnected = false;
    let retries = 5;
    while (retries > 0 && !dbConnected) {
        try {
            console.log(`Checking Database connection... (Attempts left: ${retries})`);
            await prisma.$connect();
            dbConnected = true;
            console.log('✅ Database connected successfully.');
        } catch (error) {
            retries -= 1;
            console.error(`❌ Database connection failed!`);
            if (retries > 0) {
                console.log('Retrying in 5 seconds...');
                await new Promise(resolve => setTimeout(resolve, 5000));
            } else {
                console.error('All database connection attempts failed.');
                console.error(error);
                process.exit(1); // Stop the server if DB is not reachable after all retries
            }
        }
    }

    // 2. Check Email Server Connection
    console.log('Checking Email server connectivity...');
    const isEmailOk = await verifyEmailConnection();
    if (isEmailOk) {
        console.log('✅ Email server is reachable.');
    } else {
        console.warn('⚠️ Email server connection failed. Mail features may not work.');
    }

    // 3. Seed Admin (Optional check/update)
    await seedAdmin();

    // 4. Start Listening
    app.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
        console.log('--- Server Started ---');
    });
};

startServer();
