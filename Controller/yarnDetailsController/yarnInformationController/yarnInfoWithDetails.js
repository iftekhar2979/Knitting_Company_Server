const { PrismaClient } = require('@prisma/client');
const { requestedId } = require('../../../utils/requestFunctions');
const prisma = new PrismaClient()


function transfer(from, amount) {
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

        if (currentYarnInfo.bookingQuantity < amount) {
            throw new Error(`Yarn Booking Quantity ${from} does not have enough quantity to transfer. Required: ${amount}, available: ${currentYarnInfo.bookingQuantity}`);
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
                yarnInfoID:from,
                receivedQuantity: amount,
            },
        });

        return updatedCurrentYarnInfo;
    })
}
const yarnRecevied = async (req, res) => {
    const { from, amount } = req.body
    console.log(req.body)
    try {
        const result = await transfer(from, amount)
        res.status(200).send(result)
        // return res.status(200).send(transfer(from, amount, deliveredBy))
    } catch (error) {
        return res.status(400).json(error)
    }
}


module.exports = { yarnRecevied }