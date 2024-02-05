const express = require('express')
const port = 3000
const { PrismaClient } = require('@prisma/client');
const companyRouter=require('./Routes/CompanyRoute/companyRoute')
const orderRouter=require('./Routes/OrderRoute/orderRoute')
const deliveryRoute=require('./Routes/DeliveryRoute/deliveryRoute')
const userRoute=require('./Routes/UserRoute/userRoute')
const buyerRoute=require("./Routes/BuyerRoute/buyerRoute")
const app = express();
app.use(express.json())
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(companyRouter)
app.use(orderRouter)
app.use(deliveryRoute)
app.use(userRoute)
app.use(buyerRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})