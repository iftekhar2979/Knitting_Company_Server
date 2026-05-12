const db = require('../../models/index.js');

const getSingleYarnDetails = async (req, res) => {
    const orderId = parseFloat(req.params.id)

    try {
        const yarns = await db.YarnInformation.findAll({
            where: {
                orderId: orderId
            },
            include: [
                {
                    model: db.Company,
                    as: 'company',
                    attributes: ['companyName', 'location']
                },
                {
                    model: db.YarnInformationWithDetails
                }
            ],
        });
        res.status(200).send(yarns);
    } catch (error) {
        res.status(404).send(error);
    }
}

const createYarnDetails = async (req, res) => {
    const yarnBody = req.body
    console.log(yarnBody)
    try {
        const newYarnDetails = await db.YarnInformation.create(yarnBody);
        return res.status(200).send(newYarnDetails);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error.message);
    }

}
const updateYarnDetails = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        await db.YarnInformation.update(updatedBody, {
            where: {
                id: id
            }
        });
        const updatedOrder = await db.YarnInformation.findByPk(id);
        return res.status(200).send({ isUpdated: true, updatedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }
}
const removeYarnDetails = async (req, res) => {
    const id = parseFloat(req.params.id)
    try {
        const deletedOrder = await db.YarnInformation.findByPk(id);
        await db.YarnInformation.destroy({
            where: {
                id: id
            },
        });
        return res.status(200).send({ isDeleted: true, updatedOrder: deletedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }

}

module.exports = { createYarnDetails, updateYarnDetails, getSingleYarnDetails, removeYarnDetails }