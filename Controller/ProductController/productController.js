const db = require('../../models');

const getSingleProduct = async (req, res) => {
    const fabricsId = parseFloat(req.params.id)
    try {
        const companyWithBuyers = await db.FabricsType.findByPk(fabricsId);
        res.send(companyWithBuyers);
    } catch (error) {
        res.send(error);
    }
}

const getAllProduct = async (req, res) => {
    try {
        const fabricsTypes = await db.FabricsType.findAll();
        res.status(200).send(fabricsTypes);
    } catch (error) {
        return res.status(400).send(error);
    }
}

const createProduct = async (req, res) => {
    const body = req.body
    try {
        const newfabricsType = await db.FabricsType.create(body);
        return res.status(200).send(newfabricsType);
    } catch (error) {
        console.log(error)
        return res.send(error.message);
    }
}

const updateProduct = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const [updatedCount] = await db.Company.update(updatedBody, {
            where: {
                id: id
            }
        });

        if (updatedCount === 0) {
            return res.status(404).send({ isUpdated: false, message: "Company not found" });
        }

        const updateCompany = await db.Company.findByPk(id);
        return res.status(200).send({ isUpdated: true, updateCompany });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }
}

const removeProduct = async (req, res) => {
    const id = parseFloat(req.params.id)
    try {
        const productToDelete = await db.FabricsType.findByPk(id);
        if (!productToDelete) {
            return res.status(404).send({ isDeleted: false, message: "Product not found" });
        }

        await db.FabricsType.destroy({
            where: {
                id: id
            },
        });
        return res.status(200).send({ isDeleted: true, removefabricsType: productToDelete });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }
}

module.exports = { getSingleProduct, getAllProduct, createProduct, updateProduct, removeProduct }
