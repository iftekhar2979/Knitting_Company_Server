const express = require('express')
const { createDelivery, deleteDelivery } = require('../../Controller/DeliveryController/deliveryController')

const router = express.Router()

router.post('/delivery',createDelivery)
router.delete('/delivery',deleteDelivery)
module.exports=router