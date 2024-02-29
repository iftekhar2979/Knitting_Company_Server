const express = require('express')
const port = 8000
const { PrismaClient } = require('@prisma/client');
const cors=require("cors")
const companyRouter=require('./Routes/CompanyRoute/companyRoute')
const orderRouter=require('./Routes/OrderRoute/orderRoute')
const deliveryRoute=require('./Routes/DeliveryRoute/deliveryRoute')
const userRoute=require('./Routes/UserRoute/userRoute')
const buyerRoute=require("./Routes/BuyerRoute/buyerRoute")
const productRoute=require("./Routes/ProductRoute/productRoute")
const orderDetails=require("./Routes/OrderRoute/OrderDetailsRoute/orderDetailsRoute")
const yarnDetails=require('./Routes/OrderRoute/YarnRoute/yarnDetailsRoute')
const app = express();
app.use(express.json())
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(companyRouter)
app.use(orderRouter)
app.use(deliveryRoute)
app.use(userRoute)
app.use(buyerRoute)
app.use(productRoute)
app.use(orderDetails)
app.use(yarnDetails)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})