const express = require('express')
const { getSingleOrderDetails, createOrderDetails, updateOrderDetails, removeOrderDetails } = require('../../../Controller/OrderDetailsController/orderDetailsController')
const router = express.Router()


router.get('/order/details/:id',getSingleOrderDetails)
router.post('/order/details',createOrderDetails)
router.patch('/order/details/:id',updateOrderDetails)
router.delete('/order/details/:id',removeOrderDetails)


module.exports=router