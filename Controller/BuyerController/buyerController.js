
const db = require('../../models');

const getSingleBuyer = async (req, res) => {
    const buyerId = parseFloat(req.params.id)
    try {
        const buyer = await db.Buyer.findOne({
            where: {
                id: buyerId,
            },
        });
        res.status(200).send(buyer);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getAllBuyers = async (req, res) => {
    try {
        const buyers = await db.Buyer.findAll({});
        res.status(200).send(buyers);
    } catch (error) {
        res.status(404).send(error);
    }
}
const createBuyer = async (req, res) => {
    const body = req.body
    try {
        const newBuyer = await db.Buyer.create(body);
        return res.status(200).send(newBuyer);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error.message);
    }
}
const updateBuyer = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        await db.Buyer.update(updatedBody, {
            where: {
                id: id
            }
        });
        const updatedBuyer = await db.Buyer.findByPk(id);
        return res.status(200).send({ isUpdated: true, updatedBuyer });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }

}
const removeBuyer = async (req, res) => {
    const id = parseFloat(req.params.id)

    try {
        const deletedBuyer = await db.Buyer.findByPk(id);
        await db.Buyer.destroy({
            where: {
                id: id
            },

        });
        return res.status(200).send({ isDeleted: true, removeBuyer: deletedBuyer });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }

}
module.exports = { getAllBuyers, getSingleBuyer, createBuyer, updateBuyer, removeBuyer }