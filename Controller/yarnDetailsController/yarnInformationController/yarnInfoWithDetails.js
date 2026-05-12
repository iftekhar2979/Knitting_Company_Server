const db = require('../../../models/index.js');
const { requestedId } = require('../../../utils/requestFunctions');

function transfer(from, amount, args) {
    return db.sequelize.transaction(async (t) => {
        // 1. Fetch the current order to check its quantity before updating
        const currentYarnInfo = await db.YarnInformation.findByPk(from, { transaction: t });
        if (!currentYarnInfo) {
            throw new Error(`yarn information with id ${from} does not exist`);
        }
        if (currentYarnInfo.ReceivingQuantity < amount) {
            throw new Error(`Yarn Booking Quantity ${from} does not have enough quantity to transfer. Required: ${amount}, available: ${currentYarnInfo.ReceivingQuantity}`);
        }
        // 2. Decrement amount from the sender (order).
        await currentYarnInfo.decrement('restQuantity', { by: amount, transaction: t });
        
        await db.YarnInformationWithDetails.create({
            yarnInfoID: from,
            returnQuantity: amount,
            ...args
        }, { transaction: t });

        await currentYarnInfo.reload({ transaction: t });
        return currentYarnInfo;
    })
}


function transferFromReceived(from) {
    return db.sequelize.transaction(async (t) => {
        const currentReceivedBooking = await db.YarnInformationWithDetails.findByPk(from, { transaction: t });
       
        if (!currentReceivedBooking) {
            throw new Error(`delivery with id ${from} does not exist`);
        }
        
        // 2. Increment amount of (order).
        const yarnInfo = await db.YarnInformation.findByPk(currentReceivedBooking.yarnInfoID, { transaction: t });
        if (yarnInfo) {
            await yarnInfo.increment('restQuantity', { by: currentReceivedBooking.returnQuantity, transaction: t });
            await yarnInfo.reload({ transaction: t });
        }
       
        // 2. delete the yarn Receiving details
        await currentReceivedBooking.destroy({ transaction: t });

        return yarnInfo;
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