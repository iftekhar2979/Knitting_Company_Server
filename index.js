const express = require('express')
const port = 8000
const { PrismaClient, Prisma } = require('@prisma/client');
// const http = require('http');
const cors = require("cors")
let cookieParser = require('cookie-parser')
var morgan = require('morgan')
const bcrypt=require("bcryptjs")

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
// const { initSocket } = require('./socket');
const app = express();
// const server = http.createServer(app);
app.use(express.json())
const prisma = new PrismaClient();
let corsOptions;
if (process.env.NODE_ENV === "Production") {
  corsOptions = {
    credentials: true, origin: process.env.ORIGIN_URL
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
    res.status(200).send('Database connection is successful.', process.env.DATABASE_URL);
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send({ message: 'Failed to connect to the database.', error });
  } finally {
    await prisma.$disconnect(); // Clean up connection
  }
});

async function seedAdmin(){
  const hashedPassword = await bcrypt.hash('adminPassword', 10); // Hash the password
  // Check if an admin already exists to prevent duplicates
  const adminExists = await prisma.user.findUnique({
    where: { email: 'admin@example.com' }
  });

  if (!adminExists) {
    await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        isAdmin: true,  // Assign the role of Admin,
        role:"Admin"
      },
    });
}
}
seedAdmin()
// //test

// async function getAllOrders() {
//   const topOrders = await prisma.order.groupBy({
//     by: ['companyName'],
//     _count: {
//       id: true, // Assuming 'id' is the primary key of your Order model
//     },
//     orderBy: {
//       _count: {
//         id: 'desc',
//       },
//     },
//     take: 3, // Get top 3 records
//   });
//   const topBuyers = await prisma.order.groupBy({
//     by: ['buyerName'],
//     _count: {
//       id: true, // Assuming 'id' is the primary key of your Order model
//     },
//     orderBy: {
//       _count: {
//         id: 'desc',
//       },
//     },
//     take: 3, // Get top 3 records
//   });
//   const topFabrics = await prisma.order.groupBy({
//     by: ['fabricsName'],
//     _count: {
//       id: true, // Assuming 'id' is the primary key of your Order model
//     },
//     orderBy: {
//       _count: {
//         id: 'desc',
//       },
//     },
//     take: 3, // Get top 3 records
//   });

//   let popular = { topOrders, topBuyers, topFabrics }
//   console.log(popular)
// }
// getAllOrders()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
