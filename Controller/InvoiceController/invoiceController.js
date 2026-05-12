const db = require('../../models');
const { Op } = db.Sequelize;

async function transfer(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    console.log("Order Arrays:", orderArrays);

    return await db.sequelize.transaction(async (t) => {
        const firstOrder = await db.Order.findAll({
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            include: [{ model: db.Company, as: 'company' }],
            transaction: t
        });

        if (!firstOrder || firstOrder.length === 0) {
            throw new Error("No orders found for the given numbers");
        }

        console.log("First Order Company:", firstOrder[0].company);

        const piNumber = `TKCF-${firstOrder[0].company.shortForm}-${firstOrder[0].id}/${year}`;
        const season = firstOrder[0].season;
        const defaultBuyerId = firstOrder[0].buyerId;

        const sanitizedBody = body.map(element => {
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

        await db.Order.update({
            isProformaInvoiceCreated: true,
            proformaInvoiceId: body[0].containOrders,
        }, {
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            transaction: t
        });

        console.log("Sanitized Body for ProformaInvoice:", sanitizedBody);
        const createManyProformaInvoice = await db.ProformaInvoice.bulkCreate(sanitizedBody, { transaction: t });

        return createManyProformaInvoice;
    });
}

async function transferToBill(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();

    return await db.sequelize.transaction(async (t) => {
        const firstOrder = await db.Order.findAll({
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            include: [{ model: db.Company, as: 'company' }],
            transaction: t
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

        await db.Order.update({
            billNumber: billNumber,
            isBillCreated: true,
            isProformaInvoiceCreated: false,
        }, {
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            transaction: t
        });

        const createManyBills = await db.BillInformation.bulkCreate(sanitizedBills, { transaction: t });

        return createManyBills;
    });
}

async function changeOrderAndDeletePi(containOrders, orderArrays) {
    return await db.sequelize.transaction(async (t) => {
        const deleteResult = await db.ProformaInvoice.destroy({
            where: {
                containOrders: containOrders
            },
            transaction: t
        });

        await db.Order.update({
            isProformaInvoiceCreated: false,
            proformaInvoiceId: ""
        }, {
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            transaction: t
        });

        return deleteResult;
    });
}

async function changeOrderAndDeleteBills(containOrders, orderArrays) {
    return await db.sequelize.transaction(async (t) => {
        const deleteResult = await db.BillInformation.destroy({
            where: {
                containOrders: containOrders
            },
            transaction: t
        });

        await db.Order.update({
            isProformaInvoiceCreated: false,
            proformaInvoiceId: "",
            isBillCreated: false,
            billNumber: ""
        }, {
            where: {
                orderNumber: {
                    [Op.in]: orderArrays,
                },
            },
            transaction: t
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
        sort = 'DESC'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 50);

    const where = {};
    if (term) {
        where.billNumber = { [Op.like]: `%${term}%` };
    }

    const include = [
        {
            model: db.Company,
            as: 'company',
            attributes: ['companyName'],
            where: companyName ? { companyName: { [Op.like]: `%${companyName}%` } } : undefined,
            required: !!companyName
        },
        {
            model: db.Buyer,
            as: 'buyer',
            attributes: ['buyerName'],
            where: buyerName ? { buyerName: { [Op.like]: `%${buyerName}%` } } : undefined,
            required: !!buyerName
        },
        {
            model: db.FabricsType,
            as: 'fabricsType',
            attributes: ['fabricsName']
        }
    ];

    try {
        const { count, rows: bills } = await db.BillInformation.findAndCountAll({
            where,
            attributes: ['id', 'billNumber', 'invoiceQuantity', 'invoiceAmount', 'containOrders', 'createdAt'],
            include,
            group: ['containOrders'],
            order: [['createdAt', sort.toUpperCase()]],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
            subQuery: false
        });

        // Group by causes count to be an array of objects in some sequelize versions, or we might need a separate count
        const totalItems = await db.BillInformation.count({
            where,
            include,
            distinct: true,
            col: 'containOrders'
        });

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
        sort = 'DESC'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 50);

    const where = {};
    if (term) {
        where.piNumber = { [Op.like]: `%${term}%` };
    }

    const include = [
        {
            model: db.Company,
            as: 'company',
            attributes: ['companyName'],
            where: companyName ? { companyName: { [Op.like]: `%${companyName}%` } } : undefined,
            required: !!companyName
        },
        {
            model: db.Buyer,
            as: 'buyer',
            attributes: ['buyerName'],
            where: buyerName ? { buyerName: { [Op.like]: `%${buyerName}%` } } : undefined,
            required: !!buyerName
        }
    ];

    try {
        const { count, rows: invoices } = await db.ProformaInvoice.findAndCountAll({
            where,
            attributes: ['id', 'piNumber', 'fabricsName', 'totalQuantity', 'amount', 'containOrders', 'billingWay', 'createdAt'],
            include,
            group: ['containOrders'],
            order: [['createdAt', sort.toUpperCase()]],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
            subQuery: false
        });

        const totalItems = await db.ProformaInvoice.count({
            where,
            include,
            distinct: true,
            col: 'containOrders'
        });

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
        const orders = await db.ProformaInvoice.findAll({
            where: {
                containOrders: req.params.id
            },
            include: [
                { model: db.Company, as: 'company' },
                { model: db.Buyer, as: 'buyer' }
            ],
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

        const orders = await db.Order.findAll({
            where: {
                orderNumber: {
                    [Op.in]: orderNumbers,
                },
            },
            attributes: [
                'companyName', 'buyerName', 'fabricsId', 'fabricsName', 
                'deliveredQuantity', 'season', 'createdAt', 'billNumber'
            ],
            include: [
                {
                    model: db.Company,
                    as: 'company',
                    attributes: ['companyName', 'location'],
                },
                {
                    model: db.Buyer,
                    as: 'buyer',
                    attributes: ['buyerName'],
                },
                {
                    model: db.DeliveryDetails,
                    as: 'deliveryDetails',
                    attributes: ['createdAt', 'id', 'deliveredQuantity'],
                    include: [{
                        model: db.Order,
                        as: 'order',
                        attributes: ['buyerName', 'sbNumber', 'programNumber', 'jobNumber', 'bookingNumber'],
                    }]
                },
            ],
        });

        if (!orders || orders.length === 0) {
            throw new Error("No orders found");
        }

        let billNumber = orders[0].billNumber;
        if (!billNumber) {
            throw new Error("Bill Number is not found !");
        }

        const bills = await db.BillInformation.findAll({
            where: {
                billNumber: billNumber
            },
        });

        const ordersData = orders.map(order => {
            const orderObj = order.toJSON();
            const matchingBills = bills.filter(bill => bill.fabricsId === orderObj.fabricsId);
            if (matchingBills.length > 0) {
                orderObj.billDetails = matchingBills[0];
            }
            return orderObj;
        });

        res.status(200).send(ordersData);
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

        await db.BillInformation.update({
            billNumber: billNumber
        }, {
            where: {
                containOrders: orderNumbers
            }
        });

        await db.Order.update({
            billNumber: billNumber
        }, {
            where: {
                orderNumber: {
                    [Op.in]: individualOrder,
                },
            }
        });

        const updatedOrders = await db.Order.findAll({
            where: {
                orderNumber: {
                    [Op.in]: individualOrder,
                },
            }
        });

        res.status(200).send(updatedOrders);
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
