const express = require('express')
const { createDelivery, deleteDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder, editDelivery } = require('../../Controller/DeliveryController/deliveryController')
const router = express.Router()

router.post('/delivery',createDelivery)
router.get('/delivery',getAllDelivery)
router.get('/delivery/:id',getSingleDelivery)
router.get('/order/delivery/:id',GetAllDeliveryforAnSingleOrder)
router.patch('/delivery',editDelivery)
router.delete('/delivery',deleteDelivery)
module.exports=router