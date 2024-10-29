const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getSingleYarnDetails = async (req, res) => {
    const orderId = parseFloat(req.params.id)

    try {
        const yarns = await prisma.yarnInformation.findMany({
            where: {
                orderId: orderId
            },
            include: {
                company: {
                    select: {
                        companyName: true,
                        location:true
                    }
                },
                yarnInformationWithDetails: true
            },
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
        const newYarnDetails = await prisma.yarnInformation.create({
            data: yarnBody
        });
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
        const updatedOrder = await prisma.yarnInformation.update({
            where: {
                id: id
            },
            data: updatedBody
        });
        return res.status(200).send({ isUpdated: true, updatedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }
}
const removeYarnDetails = async (req, res) => {
    const id = parseFloat(req.params.id)
    try {
        const updatedOrder = await prisma.yarnInformation.delete({
            where: {
                id: id
            },
        });
        return res.status(200).send({ isDeleted: true, updatedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isDeleted: false, error: error.message });
    }

}

module.exports = { createYarnDetails, updateYarnDetails, getSingleYarnDetails, removeYarnDetails }