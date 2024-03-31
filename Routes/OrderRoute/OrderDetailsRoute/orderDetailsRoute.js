const express = require('express')
const { getSingleOrderDetails, createOrderDetails, updateOrderDetails, removeOrderDetails } = require('../../../Controller/OrderDetailsController/orderDetailsController')
const { protect } = require('../../../Middlewares/protectMiddleware')
const router = express.Router()


router.get('/order/details/:id',protect,getSingleOrderDetails)
router.post('/order/details',protect,createOrderDetails)
router.patch('/order/details/:id',protect,updateOrderDetails)
router.delete('/order/details/:id',protect,removeOrderDetails)


module.exports=router