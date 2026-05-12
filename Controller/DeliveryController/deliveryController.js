const db = require('../../models');
const { requestedId } = require('../../utils/requestFunctions');
const { Op } = db.Sequelize;

async function transfer(from, amount, deliveredBy, res, ...rest) {
    try {
        const result = await db.sequelize.transaction(async (t) => {
            // 1. Fetch the current order
            const currentOrder = await db.Order.findByPk(from, { transaction: t });

            if (!currentOrder) {
                throw new Error(`Order with id ${from} does not exist`);
            }

            if (currentOrder.restQuantity < amount) {
                throw new Error(`Order ${from} does not have enough quantity to transfer. Required: ${amount}, available: ${currentOrder.restQuantity}`);
            }

            // 2. Update the sender (order).
            await db.Order.update({
                restQuantity: currentOrder.restQuantity - amount,
                deliveredQuantity: currentOrder.deliveredQuantity + amount,
            }, {
                where: { id: from },
                transaction: t
            });

            await db.DeliveryDetails.create({
                orderId: from,
                deliveredBy: deliveredBy,
                deliveredQuantity: amount,
                ...rest[1]
            }, { transaction: t });

            const updatedOrder = await db.Order.findByPk(from, {
                include: [{ model: db.DeliveryDetails, as: 'deliveryDetails' }],
                transaction: t
            });

            return updatedOrder;
        });
        return result;
    } catch (error) {
        console.log(error);
        if (res) {
            return res.status(400).send({ msg: "Delivery not created " });
        }
        throw error;
    }
}

async function transferFromDelivery(from) {
    return await db.sequelize.transaction(async (t) => {
        const currentDelivery = await db.DeliveryDetails.findByPk(from, { transaction: t });
        if (!currentDelivery) {
            throw new Error(`delivery with id ${from} does not exist`);
        }

        const currentOrder = await db.Order.findByPk(currentDelivery.orderId, { transaction: t });
        if (!currentOrder) {
            throw new Error(`Order with id ${currentDelivery.orderId} does not exist`);
        }

        // 2. Update (order).
        await db.Order.update({
            restQuantity: currentOrder.restQuantity + currentDelivery.deliveredQuantity,
            deliveredQuantity: currentOrder.deliveredQuantity - currentDelivery.deliveredQuantity
        }, {
            where: { id: currentDelivery.orderId },
            transaction: t
        });

        // 3. delete the delivery
        await db.DeliveryDetails.destroy({
            where: { id: from },
            transaction: t
        });

        const updatedOrder = await db.Order.findByPk(currentDelivery.orderId, {
            include: [{ model: db.DeliveryDetails, as: 'deliveryDetails' }],
            transaction: t
        });

        return updatedOrder;
    });
}

async function transferEditDelivery(from, amount) {
    return await db.sequelize.transaction(async (t) => {
        const currentDelivery = await db.DeliveryDetails.findByPk(from, { transaction: t });
        if (!currentDelivery) {
            throw new Error(`delivery with id ${from} does not exist`);
        }
        const { deliveredQuantity, orderId } = currentDelivery;
        const currentOrder = await db.Order.findByPk(orderId, { transaction: t });

        if (amount > deliveredQuantity) {
            const diff = amount - deliveredQuantity;
            await db.Order.update({
                restQuantity: currentOrder.restQuantity - diff,
                deliveredQuantity: currentOrder.deliveredQuantity + diff
            }, {
                where: { id: orderId },
                transaction: t
            });

            await db.DeliveryDetails.update({
                deliveredQuantity: amount
            }, {
                where: { id: from },
                transaction: t
            });

        } else {
            const diff = deliveredQuantity - amount;
            await db.Order.update({
                restQuantity: currentOrder.restQuantity + diff,
                deliveredQuantity: currentOrder.deliveredQuantity - diff
            }, {
                where: { id: orderId },
                transaction: t
            });

            await db.DeliveryDetails.update({
                deliveredQuantity: amount
            }, {
                where: { id: from },
                transaction: t
            });
        }

        const updatedOrder = await db.Order.findByPk(orderId, {
            include: [{ model: db.DeliveryDetails, as: 'deliveryDetails' }],
            transaction: t
        });
        return updatedOrder;
    });
}

const getAllDelivery = async (req, res) => {
    const { 
        page = 1, 
        limit = 30, 
        orderNumber = '', 
        companyName = '', 
        buyerName = '', 
        chalanNumber = '',
        sort = 'DESC'
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page));
    const parsedLimit = Math.max(1, parseInt(limit));

    const where = {};
    if (chalanNumber) {
        where.id = parseInt(chalanNumber);
    }

    const orderWhere = {};
    if (orderNumber) {
        orderWhere.orderNumber = { [Op.like]: `%${orderNumber}%` };
    }
    if (buyerName) {
        orderWhere.buyerName = { [Op.like]: `%${buyerName}%` };
    }

    const companyWhere = {};
    if (companyName) {
        companyWhere.companyName = { [Op.like]: `%${companyName}%` };
    }

    try {
        const { count, rows: deliveries } = await db.DeliveryDetails.findAndCountAll({
            where,
            include: [{
                model: db.Order,
                as: 'order',
                where: Object.keys(orderWhere).length > 0 ? orderWhere : undefined,
                required: true,
                attributes: [
                    'unit', 'bookingNumber', 'sbNumber', 'fabricsName', 
                    'orderNumber', 'buyerName', 'programNumber', 
                    'jobNumber', 'season'
                ],
                include: [
                    {
                        model: db.Company,
                        as: 'company',
                        where: Object.keys(companyWhere).length > 0 ? companyWhere : undefined,
                        required: !!companyName,
                        attributes: ['companyName', 'location']
                    },
                    {
                        model: db.OrderDetails,
                        as: 'details'
                    }
                ]
            }],
            order: [['createdAt', sort.toUpperCase()]],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
        });

        res.status(200).send({ 
            data: deliveries, 
            total: count,
            page: parsedPage,
            limit: parsedLimit,
            totalPages: Math.ceil(count / parsedLimit)
        });
    } catch (error) {
        console.error("Error fetching deliveries:", error);
        res.status(400).send(error);
    }
}

const getSingleDelivery = async (req, res) => {
    try {
        const findSingleDelivery = await db.DeliveryDetails.findByPk(requestedId(req), {
            include: [{
                model: db.Order,
                as: 'order',
                attributes: [
                    'jobNumber', 'sbNumber', 'fabricsName', 'orderNumber', 
                    'buyerName', 'programNumber', 'bookingNumber', 
                    'unit', 'season'
                ],
                include: [
                    {
                        model: db.Company,
                        as: 'company',
                        attributes: ['companyName', 'location']
                    },
                    {
                        model: db.OrderDetails,
                        as: 'details'
                    }
                ]
            }]
        });
        res.status(200).send(findSingleDelivery);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const GetAllDeliveryforAnSingleOrder = async (req, res) => {
    try {
        const findDeliveryforSingleOrder = await db.DeliveryDetails.findAll({
            where: {
                orderId: requestedId(req)
            },
            order: [['createdAt', 'DESC']]
        });
        res.status(200).send(findDeliveryforSingleOrder);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createDelivery = async (req, res) => {
    const { from, amount, deliveredBy, status, ...rest } = req.body;
    try {
        const result = await transfer(from, amount, deliveredBy, res, status, rest);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        if (!res.headersSent) {
            return res.status(400).json(error);
        }
    }
}

const deleteDelivery = async (req, res) => {
    let from = parseFloat(req.query.from);
    try {
        const result = await transferFromDelivery(from);
        res.status(200).send({ result, isDeleted: true });
    } catch (error) {
        return res.status(400).json({
            message: error.message, isDeleted: false
        });
    }
}

const editDelivery = async (req, res) => {
    let from = parseFloat(req.query.from);
    let amount = parseFloat(req.query.amount);
    try {
        const result = await transferEditDelivery(from, amount);
        res.status(200).send({ isUpdated: true, result });
    } catch (error) {
        return res.status(400).json({
            message: error.message, isUpdated: false
        });
    }
}

const createBill = async (req, res) => {
    try {
        const id = parseFloat(req.body.chalanId);
        const unitPrice = req.body.unitPrice;

        if (!unitPrice) {
            throw new Error("Must need unit price to create bill!");
        }

        const [updatedCount] = await db.DeliveryDetails.update({
            unitPrice: unitPrice
        }, {
            where: { id: id }
        });

        if (updatedCount === 0) {
            throw new Error("Bill Not Created Successfully!");
        }
        return res.status(200).send({ status: 200, message: 'Bill Successfully created!' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const getBill = async (req, res) => {
    try {
        const id = parseFloat(req.params.id);
        if (!id) {
            throw new Error("Bill id not provided!");
        }
        const chalan = await db.DeliveryDetails.findByPk(id, {
            attributes: ['id', 'deliveredQuantity', 'unitPrice', 'billNumber', 'createdAt'],
            include: [{
                model: db.Order,
                as: 'order',
                attributes: ['season', 'fabricsName', 'programNumber', 'jobNumber', 'sbNumber', 'bookingNumber'],
                include: [
                    { model: db.Buyer, as: 'buyer' },
                    { model: db.Company, as: 'company' }
                ]
            }]
        });
        res.status(200).send(chalan);
    } catch (error) {
        console.log(error);
        res.status(200).send({ error: error.message });
    }
}

const getAllDeliveryByChalan = async (req, res) => {
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

    const where = {
        unitPrice: { [Op.ne]: null }
    };

    if (term) {
        const isNumeric = !isNaN(term);
        const termConditions = [
            { billNumber: { [Op.like]: `%${term}%` } }
        ];
        if (isNumeric) {
            termConditions.push({ id: parseInt(term) });
        }
        where[Op.or] = termConditions;
    }

    const orderInclude = {
        model: db.Order,
        as: 'order',
        attributes: ['season', 'fabricsName', 'programNumber', 'jobNumber', 'sbNumber', 'bookingNumber'],
        include: [
            { 
                model: db.Buyer,
                as: 'buyer',
                where: buyerName ? { buyerName: { [Op.like]: `%${buyerName}%` } } : undefined,
                required: !!buyerName
            },
            { 
                model: db.Company,
                as: 'company',
                where: companyName ? { companyName: { [Op.like]: `%${companyName}%` } } : undefined,
                required: !!companyName
            }
        ],
        required: true
    };

    try {
        const { count, rows: bills } = await db.DeliveryDetails.findAndCountAll({
            where,
            attributes: ['id', 'deliveredQuantity', 'unitPrice', 'createdAt', 'billNumber'],
            include: [orderInclude],
            order: [['createdAt', sort.toUpperCase()]],
            limit: parsedLimit,
            offset: (parsedPage - 1) * parsedLimit,
        });

        res.status(200).send({ 
            data: bills, 
            total: count,
            page: parsedPage,
            limit: parsedLimit
        });
    } catch (error) {
        console.error("Error fetching chalan bills:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

const changeBillNumber = async (req, res) => {
    try {
        const id = parseFloat(req.params.id);
        const billNumber = req.query.billNumber;
        const [updatedCount] = await db.DeliveryDetails.update({
            billNumber: billNumber
        }, {
            where: {
                id: id,
                unitPrice: { [Op.ne]: null }
            }
        });
        
        if (updatedCount === 0) {
            return res.status(404).send({ message: "Bill not found or unit price is null" });
        }

        const updatedBill = await db.DeliveryDetails.findByPk(id);
        res.status(200).send(updatedBill);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const deleteBill = async (req, res) => {
    try {
        const id = parseFloat(req.params.id);
        await db.DeliveryDetails.update({
            unitPrice: null,
            billNumber: null,
        }, {
            where: { id: id }
        });
        const updatedBill = await db.DeliveryDetails.findByPk(id);
        res.status(200).send(updatedBill);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = { createDelivery, getBill, deleteBill, createBill, changeBillNumber, getAllDeliveryByChalan, deleteDelivery, editDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder };
