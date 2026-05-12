const express = require('express')
const config = require('./src/config/config.js');
const port = config.PORT;
const db = require('./models');
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

const app = express();
app.use(express.json())

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
    await db.sequelize.authenticate();
    res.status(200).send('Database connection is successful.');
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send({ message: 'Failed to connect to the database.', error });
  }
})

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

// DB Connection Check Route
app.get('/check-db', async (req, res) => {
  try {
    await db.sequelize.authenticate();
    res.status(200).send('Database connection is successful.');
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send({ message: 'Failed to connect to the database.', error });
  }
});

async function seedAdmin() {
  const hashedPassword = await generateHashedPassword(config.ADMIN_PASSWORD);
  const adminExists = await db.User.findOne({
    where: { email: config.ADMIN_EMAIL }
  });
  
  if (!adminExists) {
    console.log("Admin Email Not Exist, seeding...")
    await db.User.create({
      name: config.ADMIN_NAME,
      email: config.ADMIN_EMAIL,
      password: hashedPassword,
      isAdmin: true,
      role: config.ADMIN_ROLE
    });
  }
}

const startServer = async () => {
  console.log('--- Initializing Server ---');

  // 1. Sync Database
  try {
    console.log('Syncing Database...');
    // In a real migration, you might want to be careful with sync({ alter: true })
    // but here we are following the user's "make the database sync" instruction.
    await db.sequelize.sync({ alter: true });
    console.log('✅ Database synced successfully.');
  } catch (error) {
    console.error('❌ Database sync failed!');
    console.error(error);
    process.exit(1);
  }

  // 2. Check Email Server Connection
  console.log('Checking Email server connectivity...');
  const isEmailOk = await verifyEmailConnection();
  if (isEmailOk) {
    console.log('✅ Email server is reachable.');
  } else {
    console.warn('⚠️ Email server connection failed. Mail features may not work.');
  }

  // 3. Seed Admin
  await seedAdmin();

  // 4. Start Listening
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
    console.log('--- Server Started ---');
  });
};

startServer();
