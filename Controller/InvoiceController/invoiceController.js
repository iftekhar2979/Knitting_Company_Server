const { PrismaClient } = require('@prisma/client');
const { type } = require('express/lib/response');
const prisma = new PrismaClient()


function transfer(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findFirst({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            include: {
                company: true
            }

        })

        body.forEach(element => {
            element.piNumber = `TKCF-${firstOrder.company.shortForm}-${firstOrder.id}/${year}`
            element.season = firstOrder.season
        });

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: true,
                proformaInvoiceId: body.containOrders,

            },

        });

        const createManyProformaInvoice = await tx.proformaInvoice.createMany({
            data: body
        })
        return createManyProformaInvoice;
    })
}

function transferToBill(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    let newObject = body.map(item => {
        const { fabricsId, companyId, buyerName, containOrders, unitPrice, amount, invoiceAmount,orderId, invoiceQuantity } = item
        return { fabricsId, companyId, buyerName, containOrders, unitPrice, amount, invoiceAmount,orderId, invoiceQuantity }
    })

    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            include: {
                company: true
            }
        })
        newObject.forEach((element, i) => {
            element.billNumber = `TKCF-${firstOrder[0].company.shortForm}-${firstOrder[0].id}/${year}`
        });
        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                billNumber: newObject[0].billNumber,
                isBillCreated: true,
                isProformaInvoiceCreated: false,
            },
        });
        const createManyProformaInvoice = await tx.billInformation.createMany({
            data: newObject
        })
        return createManyProformaInvoice;
    })
}
function changeOrderAndDeletePi(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.proformaInvoice.deleteMany({
            where: {
                containOrders: containOrders
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
function changeOrderAndDeleteBills(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.billInformation.deleteMany({
            where: {
                containOrders: containOrders
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
                proformaInvoiceId: "",
                isBillCreated:false,
                billNumber:""
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
const createBill = async (req, res) => {
    const body = req.body
    const orderArrays = body[0].containOrders.split("_")
    try {
        const result = await transferToBill(orderArrays, body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not created Correctly" })
    }
}
const getAllBill = async (req, res) => {
    try {
        const orders = await prisma.billInformation.findMany({
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            select: {
                id: true,
                billNumber: true,
                invoiceQuantity: true,
                invoiceAmount: true,
                containOrders: true,
                order: {
                    select: {
                        orderNumber: true
                    }
                },
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
                fabricsType: {
                    select: {
                        fabricsName: true
                    }
                }
            },
            distinct: ["containOrders"]
        });
        res.status(200).send(orders);
    } catch (error) {
        console.log(error)
        res.status(404).send({ error: "Nothing Found !!!" });
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
                containOrders: true,
                billingWay: true,
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
                containOrders: req.params.id
            },
            include: {
                company: true,
                buyer: true,
            },
        });

        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}
const getSingleBill = async (req, res) => {
    // console.log()
    let orderNumbers = req.params.id.split("_")
    try {
        const orders = await prisma.order.findMany({
            where: {
                orderNumber: {
                    in: orderNumbers
                }
            },
            select: {
                companyName: true,
                buyerName: true,
                fabricsName: true,
                deliveredQuantity: true,
                season: true,
                company: {
                    select: {
                        companyName: true,
                        location: true
                    }
                },
                buyer: {
                    select: {
                        buyerName: true
                    }
                },
                deliveryDetails: {
                    select: {
                        order: {
                            select: {
                                buyerName: true,
                                sbNumber: true,
                                programNumber: true,
                                jobNumber: true,
                                bookingNumber: true,
                            }
                        },
                        createdAt: true,
                        id: true,
                        deliveredQuantity: true
                    }
                },
                billDetails: {
                    select: {
                        billNumber: true,
                        invoiceAmount: true,
                        amount: true,
                        invoiceQuantity: true,
                        unitPrice: true,
                        createdAt: true
                    }
                }

            },

        });

        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}
const deleteSingleProformaInvoice = async (req, res) => {
    const params = req.params.id
    const orderArrays = params.split("_")
    try {
        const result = await changeOrderAndDeletePi(params, orderArrays)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not Deleted Correctly" })
    }
}
const deleteSingleBill = async (req, res) => {
    const params = req.params.id
    const orderArrays = params.split("_")
    console.log(params)
    try {
        const result = await changeOrderAndDeleteBills(params, orderArrays)
        res.status(200).send(result)
    } catch (error) {
       
        res.status(400).send({ error: "Bill did not Deleted Correctly" })
    }
}

module.exports = { createProformaInvoice,deleteSingleBill, getSingleBill, getAllBill, getAllProformaInvoices, createBill, getSingleProformaInvoice, deleteSingleProformaInvoice }