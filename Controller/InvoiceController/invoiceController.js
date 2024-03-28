const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


function transfer(orderArrays, body) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.proformaInvoice.createMany({
            data: body
        })
        console.log(createManyProformaInvoice)

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: true,
                proformaInvoiceId: body.containOrders
            },
        });


        return createManyProformaInvoice;
    })
}
function changeOrderAndDeletePi(containOrders,orderArrays) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.proformaInvoice.deleteMany({
            where:{
                containOrders:containOrders
            }
        })

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: false,
                proformaInvoiceId: ""
            },
        });


        return createManyProformaInvoice;
    })
}
const createProformaInvoice = async (req, res) => {
    const body = req.body
    const orderArrays = body[0].containOrders.split("_")
    try {
        const result = await transfer(orderArrays, body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not created Correctly" })
    }
}
const getAllProformaInvoices = async (req, res) => {
    try {
        const orders = await prisma.proformaInvoice.findMany({
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            select: {
                id: true,
                piNumber: true,
                fabricsName: true,
                totalPIQuantity: true,
                totalPIAmount: true,
                containOrders:true,
                company: {

                    select: {
                        companyName: true
                    }
                },
                buyer: {
                    select: {
                        buyerName: true
                    }
                },
            },
            distinct: ["containOrders"]
        });
        res.status(200).send(orders);
    } catch (error) {
        console.log(error)
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}

const getSingleProformaInvoice = async (req, res) => {

    try {
        const orders = await prisma.proformaInvoice.findMany({
            where: {
                piNumber: req.params.id
            },
            include: {
                company: true,
                buyer: true
            },
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}
const deleteSingleProformaInvoice = async (req, res) => {
    const params=req.params.id
    const orderArrays = params.split("_")
    try {
        const result = await changeOrderAndDeletePi(params,orderArrays)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not Deleted Correctly" })
    }
}

module.exports = { createProformaInvoice, getAllProformaInvoices, getSingleProformaInvoice ,deleteSingleProformaInvoice}