const express = require('express')
const { createDelivery, deleteDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder, editDelivery } = require('../../Controller/DeliveryController/deliveryController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.post('/api/delivery',protect,createDelivery)
router.get('/api/delivery',protect,getAllDelivery)
router.get('/api/delivery/:id',protect,getSingleDelivery)
router.get('/api/order/delivery/:id',protect,GetAllDeliveryforAnSingleOrder)
router.patch('/api/delivery',protect,editDelivery)
router.delete('/api/delivery',protect,deleteDelivery)
module.exports=router