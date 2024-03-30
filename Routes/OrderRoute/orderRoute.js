const express = require('express')
const { getAllOrder, findOrderWithPo, getSingleOrder, createOrder, updateOrder, removeOrder, getSingleOrderQuantityInfo, getAllOrderForInvoice, getSingleOrderForEdit} = require('../../Controller/OrderController/orderController')
const router = express.Router()

router.get('/order',getAllOrder)
router.get('/api/v1/order',getAllOrderForInvoice)
router.get('/order/:id',getSingleOrder)
router.get('/edit/order/:id',getSingleOrderForEdit)
router.get('/quantity/order/:id',getSingleOrderQuantityInfo)
router.post('/order',createOrder)
router.patch('/order/:id',updateOrder)
router.delete('/order/:id',removeOrder)
router.post('/api/v1/order/invoice',findOrderWithPo)

module.exports=router