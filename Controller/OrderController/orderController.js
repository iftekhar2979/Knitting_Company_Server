const db = require('../../models');
const { Op } = db.Sequelize;

const getAllOrder = async (req, res) => {
    const {
        page = 1,
        limit = 30,
        orderNumber = '',
        companyName = '',
        buyerName = '',
        fabricsName = '',
        season = '',
        status = '',
        sort = 'DESC'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 30);
    const andConditions = [];

    if (orderNumber) {
        andConditions.push({ orderNumber: { [Op.like]: `%${orderNumber}%` } });
    }

    if (companyName) {
        andConditions.push({
            [Op.or]: [
                { companyName: { [Op.like]: `%${companyName}%` } },
                { '$company.companyName$': { [Op.like]: `%${companyName}%` } }
            ]
        });
    }

    if (buyerName) {
        andConditions.push({
            [Op.or]: [
                { buyerName: { [Op.like]: `%${buyerName}%` } },
                { '$buyer.buyerName$': { [Op.like]: `%${buyerName}%` } }
            ]
        });
    }

    if (fabricsName) {
        andConditions.push({
            [Op.or]: [
                { fabricsName: { [Op.like]: `%${fabricsName}%` } },
                { '$fabricsType.fabricsName$': { [Op.like]: `%${fabricsName}%` } }
            ]
        });
    }

    if (season) {
        andConditions.push({ season: { [Op.like]: `%${season}%` } });
    }

    if (status) {
        andConditions.push({ status: { [Op.like]: `%${status}%` } });
    }

    const where = andConditions.length > 0 ? { [Op.and]: andConditions } : {};

    try {
        const { rows: orders, count: total } = await db.Order.findAndCountAll({
            where,
            order: [['createdAt', sort.toUpperCase()]],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
            include: [
                {
                    model: db.Company,
                    as: 'company',
                    attributes: ['companyName']
                },
                {
                    model: db.Buyer,
                    as: 'buyer',
                    attributes: ['buyerName']
                },
                {
                    model: db.FabricsType,
                    as: 'fabricsType',
                    attributes: ['fabricsName']
                }
            ]
        });

        res.send({
            orders,
            total,
            page: parsedPage,
            limit: parsedLimit,
            totalPages: Math.ceil(total / parsedLimit)
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

const getAllOrderForInvoice = async (req, res) => {
    const {
        page = 1,
        limit = 30,
        orderNumber = '',
        companyName = '',
        buyerName = '',
        fabricsName = '',
        sort = 'DESC'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 30);
    const andConditions = [];

    if (orderNumber) {
        andConditions.push({ orderNumber: { [Op.like]: `%${orderNumber}%` } });
    }

    if (companyName) {
        andConditions.push({
            [Op.or]: [
                { companyName: { [Op.like]: `%${companyName}%` } },
                { '$company.companyName$': { [Op.like]: `%${companyName}%` } }
            ]
        });
    }

    if (buyerName) {
        andConditions.push({
            [Op.or]: [
                { buyerName: { [Op.like]: `%${buyerName}%` } },
                { '$buyer.buyerName$': { [Op.like]: `%${buyerName}%` } }
            ]
        });
    }

    if (fabricsName) {
        andConditions.push({
            [Op.or]: [
                { fabricsName: { [Op.like]: `%${fabricsName}%` } },
                { '$fabricsType.fabricsName$': { [Op.like]: `%${fabricsName}%` } }
            ]
        });
    }

    const where = andConditions.length > 0 ? { [Op.and]: andConditions } : {};

    try {
        const { rows: orders, count: total } = await db.Order.findAndCountAll({
            where,
            order: [
                ['orderQuantity', sort.toUpperCase()],
                ['createdAt', 'DESC']
            ],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
            attributes: [
                'id',
                'companyName',
                'orderNumber',
                'fabricsName',
                'orderQuantity',
                'buyerName',
                'isBillCreated',
                'isProformaInvoiceCreated'
            ],
            include: [
                { model: db.Company, as: 'company', attributes: [] },
                { model: db.Buyer, as: 'buyer', attributes: [] },
                { model: db.FabricsType, as: 'fabricsType', attributes: [] }
            ]
        });

        res.send({
            orders,
            total,
            page: parsedPage,
            limit: parsedLimit,
            totalPages: Math.ceil(total / parsedLimit)
        });
    } catch (error) {
        console.error("Error fetching invoice orders:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

const getSingleOrder = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await db.Order.findOne({
            where: {
                id: orderId
            },
            include: [
                {
                    model: db.Company,
                    as: 'company'
                }
            ],
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

const getSingleOrderForEdit = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await db.Order.findOne({
            where: {
                id: orderId
            },
            include: [
                { model: db.Company, as: 'company' },
                { model: db.Buyer, as: 'buyer' },
                { model: db.FabricsType, as: 'fabricsType' },
                { model: db.OrderDetails, as: 'details' }
            ],
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

const getSingleOrderQuantityInfo = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await db.Order.findOne({
            where: {
                id: orderId
            },
            attributes: [
                'orderQuantity',
                'restQuantity',
                'deliveredQuantity',
                'status'
            ]
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

const createOrder = async (req, res) => {
    const orderBody = req.body
    if (!orderBody.buyerId) {
        orderBody.buyerId = null
    }
    try {
        if (orderBody.orderNumber) {
            const existingOrder = await db.Order.findOne({
                where: {
                    orderNumber: orderBody.orderNumber
                }
            });

            if (existingOrder) {
                return res.status(400).send({ message: "Order number already exists" });
            }
        }

        const newOrder = await db.Order.create(orderBody);

        return res.status(200).send(newOrder);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

const updateOrder = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        await db.Order.update(updatedBody, {
            where: {
                id: id
            }
        });
        const updatedOrder = await db.Order.findByPk(id);
        return res.status(200).send({ isUpdated: true, updatedOrder });
    } catch (error) {
        console.log(error)
        return res.status(400).send({ isUpdated: false, error: error.message });
    }
}

const removeOrder = async (req, res) => {
    const id = parseFloat(req.params.id)

    try {
        const deletedOrder = await db.Order.findByPk(id);
        await db.Order.destroy({
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

const findOrderWithPo = async (req, res) => {
    const orderNumbers = req.body.map(num => String(num));

    try {
        const ordersCheck = await db.Order.findAll({
            where: {
                orderNumber: {
                    [Op.in]: orderNumbers,
                },
            },
            attributes: ['id', 'companyId', 'buyerId'],
            group: ['companyId'],
        });

        if (ordersCheck.length > 1) {
            return res.status(404).send("Order numbers belong to different companies and Different Buyers");
        }

        const result = await db.sequelize.query(
            `SELECT 
              companyId, 
              fabricsName, 
              fabricsId, 
              GROUP_CONCAT(id) as orderId, 
              SUM(deliveredQuantity) as deliveredQuantity
            FROM 
              \`Order\`
            WHERE 
              orderNumber IN (?)
            GROUP BY 
              companyId, 
              fabricsName, 
              fabricsId;`,
            {
                replacements: [orderNumbers],
                type: db.Sequelize.QueryTypes.SELECT
            }
        );

        console.log(result);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    }
}

module.exports = { getAllOrder, findOrderWithPo, getSingleOrderForEdit, getAllOrderForInvoice, getSingleOrderQuantityInfo, getSingleOrder, createOrder, updateOrder, removeOrder }