const express = require('express')
const { getAllOrder, findOrderWithPo, getSingleOrder, createOrder, updateOrder, removeOrder, getSingleOrderQuantityInfo, getAllOrderForInvoice, getSingleOrderForEdit} = require('../../Controller/OrderController/orderController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.get('/order',protect,getAllOrder)
router.get('/api/v1/order',protect,getAllOrderForInvoice)
router.get('/order/:id',protect,getSingleOrder)
router.get('/edit/order/:id',protect,getSingleOrderForEdit)
router.get('/quantity/order/:id',protect,getSingleOrderQuantityInfo)
router.post('/order',protect,createOrder)
router.patch('/order/:id',protect,updateOrder)
router.delete('/order/:id',protect,removeOrder)
router.post('/api/v1/order/invoice',protect,findOrderWithPo)

module.exports=router