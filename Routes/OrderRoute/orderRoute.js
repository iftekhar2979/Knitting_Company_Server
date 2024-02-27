const express = require('express')
const { getAllOrder, findOrderWithPo, getSingleOrder, createOrder, updateOrder, removeOrder, getSingleOrderQuantityInfo} = require('../../Controller/OrderController/orderController')
const router = express.Router()

router.get('/order',getAllOrder)
router.get('/order/:id',getSingleOrder)
router.get('/quantity/order/:id',getSingleOrderQuantityInfo)
router.post('/order',createOrder)
router.patch('/order/:id',updateOrder)
router.delete('/order/:id',removeOrder)
router.get('/poOrders',findOrderWithPo)

module.exports=router