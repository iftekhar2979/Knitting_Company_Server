const db = require('../../models');

const getSingleOrderDetails = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await db.OrderDetails.findOne({
            where: {
                orderId: orderId
            },   
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

const createOrderDetails = async (req, res) => {
    const orderBody = req.body
    try {
        const neworderDetails = await db.OrderDetails.create(orderBody);
        return res.status(200).send(neworderDetails);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error.message);
    }
}

const updateOrderDetails = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const [updatedCount] = await db.OrderDetails.update(updatedBody, {
            where: {
                id: id
            }
        });
        
        if (updatedCount === 0) {
            return res.status(404).send({ isUpdated: false, message: "Order details not found" });
        }

        const updatedOrder = await db.OrderDetails.findByPk(id);
        return res.status(200).send({ isUpdated: true, updatedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }
}

const removeOrderDetails = async (req, res) => {
    const id = parseFloat(req.params.id)
    try {
        const orderToDelete = await db.OrderDetails.findByPk(id);
        if (!orderToDelete) {
            return res.status(404).send({ isDeleted: false, message: "Order details not found" });
        }

        await db.OrderDetails.destroy({
            where: {
                id: id
            },      
        });
        return res.status(200).send({ isDeleted: true, updatedOrder: orderToDelete });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }
}

module.exports = { createOrderDetails, updateOrderDetails, getSingleOrderDetails, removeOrderDetails }
