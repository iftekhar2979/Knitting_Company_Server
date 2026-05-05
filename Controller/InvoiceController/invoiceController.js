const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function transfer(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Order Arrays:", orderArrays);

    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            include: {
                company: true
            }
        });

        if (!firstOrder || firstOrder.length === 0) {
            throw new Error("No orders found for the given numbers");
        }

        console.log("First Order Company:", firstOrder[0].company);

        const piNumber = `TKCF-${firstOrder[0].company.shortForm}-${firstOrder[0].id}/${year}`;
        const season = firstOrder[0].season;
        const defaultBuyerId = firstOrder[0].buyerId;

        const sanitizedBody = body.map(element => {
            // Explicitly pick only the fields that exist in the ProformaInvoice model
            return {
                style: element.style,
                fabricsName: element.fabricsName,
                fabricsId: element.fabricsId,
                description: element.description,
                finishDia: element.finishDia,
                unitPrice: element.unitPrice,
                totalQuantity: element.totalQuantity,
                amount: element.amount,
                companyId: element.companyId,
                buyerId: element.buyerId || defaultBuyerId,
                containOrders: element.containOrders,
                piName: element.piName,
                piNumber: piNumber,
                invoiceAmount: element.invoiceAmount,
                invoiceQuantity: element.invoiceQuantity,
                season: season,
                billingWay: element.billingWay,
                createdAt: element.createdAt ? new Date(element.createdAt) : new Date()
            };
        });

        await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            data: {
                isProformaInvoiceCreated: true,
                proformaInvoiceId: body[0].containOrders,
            },
        });

        console.log("Sanitized Body for ProformaInvoice:", sanitizedBody);
        const createManyProformaInvoice = await tx.proformaInvoice.createMany({
            data: sanitizedBody
        });

        return createManyProformaInvoice;
    });
}

function transferToBill(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();

    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            include: {
                company: true
            }
        });

        if (!firstOrder || firstOrder.length === 0) {
            throw new Error("No orders found for the given numbers");
        }

        const billNumber = `TKCF-${firstOrder[0].company.shortForm}-${firstOrder[0].id}/${year}`;
        const defaultBuyerId = firstOrder[0].buyerId;

        let sanitizedBills = body.map(item => {
            return {
                billNumber: billNumber,
                unitPrice: item.unitPrice,
                amount: item.amount,
                invoiceAmount: item.invoiceAmount,
                invoiceQuantity: item.invoiceQuantity,
                containOrders: item.containOrders,
                companyId: item.companyId,
                buyerId: item.buyerId || defaultBuyerId,
                fabricsId: item.fabricsId,
                createdAt: item.createdAt ? new Date(item.createdAt) : new Date()
            };
        });

        await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            data: {
                billNumber: billNumber,
                isBillCreated: true,
                isProformaInvoiceCreated: false,
            },
        });

        const createManyBills = await tx.billInformation.createMany({
            data: sanitizedBills
        });

        return createManyBills;
    });
}

function changeOrderAndDeletePi(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const deleteResult = await tx.proformaInvoice.deleteMany({
            where: {
                containOrders: containOrders
            }
        });

        await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            data: {
                isProformaInvoiceCreated: false,
                proformaInvoiceId: ""
            },
        });

        return deleteResult;
    });
}

function changeOrderAndDeleteBills(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const deleteResult = await tx.billInformation.deleteMany({
            where: {
                containOrders: containOrders
            }
        });

        await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays,
                },
            },
            data: {
                isProformaInvoiceCreated: false,
                proformaInvoiceId: "",
                isBillCreated: false,
                billNumber: ""
            },
        });

        return deleteResult;
    });
}

const createProformaInvoice = async (req, res) => {
    const body = req.body;
    if (!body || body.length === 0) {
        return res.status(400).send({ error: "Empty request body" });
    }
    const orderArrays = body[0].containOrders.split("_");
    try {
        const result = await transfer(orderArrays, body);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error creating Proforma Invoice:", error);
        res.status(400).send({ error: error.message || "Proforma Invoice was not created correctly" });
    }
};

const createBill = async (req, res) => {
    const body = req.body;
    if (!body || body.length === 0) {
        return res.status(400).send({ error: "Empty request body" });
    }
    const orderArrays = body[0].containOrders.split("_");
    try {
        const result = await transferToBill(orderArrays, body);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error creating Bill:", error);
        res.status(400).send({ error: error.message || "Bill was not created correctly" });
    }
};

const getAllBill = async (req, res) => {
    const {
        page = 1,
        limit = 50,
        term = '',
        companyName = '',
        buyerName = '',
        sort = 'desc'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 50);

    const andConditions = [];

    if (term) {
        andConditions.push({ billNumber: { contains: term } });
    }

    if (companyName) {
        andConditions.push({
            company: { companyName: { contains: companyName } }
        });
    }

    if (buyerName) {
        andConditions.push({
            buyer: { buyerName: { contains: buyerName } }
        });
    }

    const where = andConditions.length > 0 ? { AND: andConditions } : {};

    try {
        const [bills, allBillsCount] = await Promise.all([
            prisma.billInformation.findMany({
                where,
                orderBy: [{ createdAt: sort }],
                select: {
                    id: true,
                    billNumber: true,
                    invoiceQuantity: true,
                    invoiceAmount: true,
                    containOrders: true,
                    createdAt: true,
                    company: {
                        select: { companyName: true }
                    },
                    buyer: {
                        select: { buyerName: true }
                    },
                    fabricsType: {
                        select: { fabricsName: true }
                    }
                },
                distinct: ['containOrders'],
                take: parsedLimit,
                skip: (parsedPage - 1) * parsedLimit,
            }),
            prisma.billInformation.findMany({
                where,
                select: { containOrders: true }
            })
        ]);

        const totalItems = new Set(allBillsCount.map(b => b.containOrders)).size;

        res.status(200).send({
            data: bills,
            total: totalItems,
            page: parsedPage,
            limit: parsedLimit
        });
    } catch (error) {
        console.error("Error fetching bills:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const getAllProformaInvoices = async (req, res) => {
    const {
        page = 1,
        limit = 50,
        term = '',
        companyName = '',
        buyerName = '',
        sort = 'desc'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 50);

    const andConditions = [];

    if (term) {
        andConditions.push({ piNumber: { contains: term } });
    }

    if (companyName) {
        andConditions.push({
            company: { companyName: { contains: companyName } }
        });
    }

    if (buyerName) {
        andConditions.push({
            buyer: { buyerName: { contains: buyerName } }
        });
    }

    const where = andConditions.length > 0 ? { AND: andConditions } : {};

    try {
        const [invoices, allInvoicesCount] = await Promise.all([
            prisma.proformaInvoice.findMany({
                where,
                orderBy: [{ createdAt: sort }],
                select: {
                    id: true,
                    piNumber: true,
                    fabricsName: true,
                    totalQuantity: true,
                    amount: true,
                    containOrders: true,
                    billingWay: true,
                    createdAt: true,
                    company: {
                        select: { companyName: true }
                    },
                    buyer: {
                        select: { buyerName: true }
                    },
                },
                distinct: ["containOrders"],
                take: parsedLimit,
                skip: (parsedPage - 1) * parsedLimit,
            }),
            prisma.proformaInvoice.findMany({
                where,
                select: { containOrders: true }
            })
        ]);

        const totalItems = new Set(allInvoicesCount.map(i => i.containOrders)).size;

        res.status(200).send({
            data: invoices,
            total: totalItems,
            page: parsedPage,
            limit: parsedLimit
        });
    } catch (error) {
        console.error("Error fetching proforma invoices:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

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
};

const getSingleBill = async (req, res) => {
    try {
        let orderNumbers = req.params.id;
        if (orderNumbers?.includes("_")) {
            orderNumbers = req.params.id.split("_");
        } else {
            orderNumbers = [orderNumbers];
        }

        const orders = await prisma.order.findMany({
            where: {
                orderNumber: {
                    in: orderNumbers,
                },
            },
            select: {
                companyName: true,
                buyerName: true,
                fabricsId: true,
                fabricsName: true,
                deliveredQuantity: true,
                season: true,
                createdAt: true,
                billNumber: true,
                company: {
                    select: {
                        companyName: true,
                        location: true,
                    },
                },
                buyer: {
                    select: {
                        buyerName: true,
                    },
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
                            },
                        },
                        createdAt: true,
                        id: true,
                        deliveredQuantity: true,
                    },
                },
            },
        });

        if (!orders || orders.length === 0) {
            throw new Error("No orders found");
        }

        let billNumber = orders[0].billNumber;
        if (!billNumber) {
            throw new Error("Bill Number is not found !");
        }

        const bills = await prisma.billInformation.findMany({
            where: {
                billNumber: billNumber
            },
        });

        orders.forEach(order => {
            const matchingBills = bills.filter(bill => bill.fabricsId === order.fabricsId);
            if (matchingBills.length > 0) {
                order.billDetails = matchingBills[0];
            }
        });

        res.status(200).send(orders);
    } catch (error) {
        console.log(error);
        res.status(404).send({ error: error.message || "Nothing Found !!!" });
    }
};

const deleteSingleProformaInvoice = async (req, res) => {
    const params = req.params.id;
    const orderArrays = params.split("_");
    try {
        const result = await changeOrderAndDeletePi(params, orderArrays);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: "Proforma Invoice did not Deleted Correctly" });
    }
};

const deleteSingleBill = async (req, res) => {
    const params = req.params.id;
    const orderArrays = params.split("_");
    try {
        const result = await changeOrderAndDeleteBills(params, orderArrays);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: "Bill did not Deleted Correctly" });
    }
};

const changeBillNumber = async (req, res) => {
    try {
        let orderNumbers = req.params.id;
        const billNumber = req.query.billNumber;
        let individualOrder = [];
        if (orderNumbers?.includes("_")) {
            individualOrder = req.params.id.split("_");
        } else {
            individualOrder = [orderNumbers];
        }

        const bills = await prisma.billInformation.updateMany({
            where: {
                containOrders: orderNumbers
            },
            data: {
                billNumber: billNumber
            }
        });

        const orders = await prisma.order.updateMany({
            where: {
                orderNumber: {
                    in: individualOrder,
                },
            },
            data: {
                billNumber: billNumber
            }
        });

        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    createProformaInvoice,
    changeBillNumber,
    deleteSingleBill,
    getSingleBill,
    getAllBill,
    getAllProformaInvoices,
    createBill,
    getSingleProformaInvoice,
    deleteSingleProformaInvoice
};
