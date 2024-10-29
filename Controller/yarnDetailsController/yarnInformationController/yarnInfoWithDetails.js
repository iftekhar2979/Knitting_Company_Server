const { PrismaClient } = require('@prisma/client');
const { requestedId } = require('../../../utils/requestFunctions');
const prisma = new PrismaClient()


function transfer(from, amount,args) {
    return prisma.$transaction(async (tx) => {
        // 1. Fetch the current order to check its quantity before updating
        const currentYarnInfo = await tx.yarnInformation.findUnique({
            where: {
                id: from,
            },
        });
        if (!currentYarnInfo) {
            throw new Error(`yarn information with id ${from} does not exist`);
        }
        if (currentYarnInfo.ReceivingQuantity < amount) {
            throw new Error(`Yarn Booking Quantity ${from} does not have enough quantity to transfer. Required: ${amount}, available: ${currentYarnInfo.ReceivingQuantity}`);
        }
        // 2. Decrement amount from the sender (order).
        const updatedCurrentYarnInfo = await tx.yarnInformation.update({
            where: {
                id: from,
            },
            data: {
                restQuantity: {
                    decrement: amount,
                },
                updatedAt: new Date(),
            },
        });
        const newYarnRecevingDetails = await tx.yarnInformationWithDetails.create({
            data: {
                // Consider making this dynamic if needed
                yarnInfoID: from,
                returnQuantity: amount,
                ...args
            },
        });
        return updatedCurrentYarnInfo;
    })
}


function transferFromReceived(from) {
    return prisma.$transaction(async (tx) => {
        const currentReceivedBooking = await tx.yarnInformationWithDetails.findUnique({
            where: {
                id: from,
            },
        });
       
        if (!currentReceivedBooking) {
            throw new Error(`delivery with id ${from} does not exist`);
        }
        
        // 2. Increment amount of (order).
        const updatedCurrentYarnInfo = await tx.yarnInformation.update({
            where: {
                id: currentReceivedBooking?.yarnInfoID,
            },
            data: {
                restQuantity: {
                    increment: currentReceivedBooking.returnQuantity,
                },
                updatedAt: new Date(),
            },
        });
       
        // 2. delete the yarn Receiving details
        const newYarnRecevingDetails = await tx.yarnInformationWithDetails.delete({
            where: {
                id: from,
            },
        });

        return updatedCurrentYarnInfo;
    })
}
const yarnRetruned = async (req, res) => {
    const { from, amount ,...args} = req.body
    
    try {
        const result = await transfer(from, amount,args)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}
const receivedYarnDeleted = async (req, res) => {
    let from = parseFloat(req.params.id)
    
    try {
        const result = await transferFromReceived(from)
        res.status(200).send({ result, isDeleted: true })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: error.message, isDeleted: false
        })
    }
}
module.exports = { yarnRetruned,receivedYarnDeleted}