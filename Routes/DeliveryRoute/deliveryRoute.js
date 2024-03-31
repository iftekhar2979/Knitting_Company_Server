const express = require('express')
const { createDelivery, deleteDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder, editDelivery } = require('../../Controller/DeliveryController/deliveryController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.post('/delivery',protect,createDelivery)
router.get('/delivery',protect,getAllDelivery)
router.get('/delivery/:id',protect,getSingleDelivery)
router.get('/order/delivery/:id',protect,GetAllDeliveryforAnSingleOrder)
router.patch('/delivery',protect,editDelivery)
router.delete('/delivery',protect,deleteDelivery)
module.exports=router