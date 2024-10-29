const express = require('express')
const { getAllOrder, findOrderWithPo, getSingleOrder, createOrder, updateOrder, removeOrder, getSingleOrderQuantityInfo, getAllOrderForInvoice, getSingleOrderForEdit } = require('../../Controller/OrderController/orderController')
const { protect } = require('../../Middlewares/protectMiddleware')
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient()
const router = express.Router()
router.get('/api/order', protect, getAllOrder)
router.get('/api/v1/order', protect, getAllOrderForInvoice)
router.get('/api/order/:id', protect, getSingleOrder)
router.get('/api/edit/order/:id', protect, getSingleOrderForEdit)
router.get('/api/quantity/order/:id', protect, getSingleOrderQuantityInfo)
router.post('/api/order', protect, createOrder)
router.patch('/api/order/:id', protect, updateOrder)
router.delete('/api/order/:id', protect, removeOrder)
router.post('/api/v1/order/invoice', protect, findOrderWithPo)
router.patch('/api/orders/:id/status', async (req, res) => {
    const orderId = parseInt(req.params.id);
    const { status } = req.body;
    // console.log(req.body)
    if (!status) {
        return res.status(400).json({ error: "Status is required" });
    }
    try {
        const updatedOrder = await prisma.order.update({
            where: { id: orderId },
            data: { status: status, updatedAt: new Date() },
        });
        res.status(200).json({ message: "Status Updated", updatedOrder });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the order status" });
    }
});
module.exports = router