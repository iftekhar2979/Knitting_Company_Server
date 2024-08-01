const express = require('express')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const getAllDeliveryMan = async (req, res) => {
    try {
        const findAllDeliveryMan = await prisma.deliveryMen.findMany()
        res.status(200).send(findAllDeliveryMan)
    } catch (error) {
        res.status(400).send(error)
    }
}

router.get('/api/deliveryman', getAllDeliveryMan)
module.exports = router