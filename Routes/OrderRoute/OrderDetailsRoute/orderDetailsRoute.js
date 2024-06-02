const express = require('express')
const { getSingleOrderDetails, createOrderDetails, updateOrderDetails, removeOrderDetails } = require('../../../Controller/OrderDetailsController/orderDetailsController')
const { protect } = require('../../../Middlewares/protectMiddleware')
const router = express.Router()


router.get('/api/order/details/:id',protect,getSingleOrderDetails)
router.post('/api/order/details',protect,createOrderDetails)
router.patch('/api/order/details/:id',protect,updateOrderDetails)
router.delete('/api/order/details/:id',protect,removeOrderDetails)


module.exports=router