
const db = require('../../models');

const getSingleCompany = async (req, res) => {
    const companyId = parseFloat(req.params.id)
    try {
        const companyWithBuyers = await db.Company.findOne({
            where: {
                id: companyId,
            },
            include: [
                {
                    model: db.Buyer,
                    as: 'buyers'
                }
            ],
        });
        if (!companyWithBuyers) {
            return res.status(404).send({ message: 'Company not found' });
        }
        res.send(companyWithBuyers);
    } catch (error) {
        res.send(error);
    }
}
const getAllCompanyWithBuyers = async (req, res) => {
    try {
        const companiesWithBuyers = await db.Company.findAll({
            include: [
                {
                    model: db.Buyer,
                    as: 'buyers'
                }
            ],
        });
        res.status(200).send(companiesWithBuyers);
    } catch (error) {
        return res.status(400).send(error);
    }
}
const createCompany = async (req, res) => {
    const body = req.body
    console.log(body, 'body')
    try {
        const newCompany = await db.Company.create(body);
        return res.status(200).send(newCompany);
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(400).send(`Company Email Should be Unique`);
        }
        return res.status(400).send(error.message)
    }
}
const updateCompany = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const company = await db.Company.findByPk(id);
        if (!company) {
            return res.status(404).send({ isUpdated: false, error: 'Company not found' });
        }
        await db.Company.update(updatedBody, {
            where: {
                id: id
            }
        });
        const updatedCompany = await db.Company.findByPk(id);
        return res.status(200).send({ isUpdated: true, updateCompany: updatedCompany });
    } catch (error) {
        console.log(error.message)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }

}
const removeCompany = async (req, res) => {
    const id = parseFloat(req.params.id)
    console.log(id)

    try {
        const deletedCompany = await db.Company.findByPk(id);
        if (!deletedCompany) {
            return res.status(404).send({ isDeleted: false, error: 'Company not found' });
        }
        await db.Company.destroy({
            where: {
                id: id
            },

        });
        return res.status(200).send({ isDeleted: true, removeCompany: deletedCompany });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }

}
module.exports = { getSingleCompany, getAllCompanyWithBuyers, createCompany, updateCompany, removeCompany }
