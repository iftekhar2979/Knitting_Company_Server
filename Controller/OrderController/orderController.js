const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient()

const getAllOrder = async (req, res) => {
    const {
        page = 1,
        limit = 30,
        orderNumber = '',
        companyName = '',
        buyerName = '',
        fabricsName = '',
        season = '',
        status = ''
    } = req.query;

    const parsedPage = Math.max(1, parseInt(page) || 1);
    const parsedLimit = Math.max(1, parseInt(limit) || 30);
    console.log(req.query)
    const andConditions = [];

    if (orderNumber) {
        andConditions.push({ orderNumber: { contains: orderNumber } });
    }

    if (companyName) {
        andConditions.push({
            OR: [
                { companyName: { contains: companyName } },
                { company: { companyName: { contains: companyName } } }
            ]
        });
    }

    if (buyerName) {
        andConditions.push({
            OR: [
                { buyerName: { contains: buyerName } },
                { buyer: { buyerName: { contains: buyerName } } }
            ]
        });
    }

    if (fabricsName) {
        console.log(fabricsName)
        andConditions.push({
            OR: [
                { fabricsName: { contains: fabricsName } },
                { fabricsType: { fabricsName: { contains: fabricsName } } }
            ]
        });
    }

    if (season) {
        andConditions.push({ season: { contains: season } });
    }

    if (status) {
        andConditions.push({ status: { contains: status } });
    }

    const where = andConditions.length > 0 ? { AND: andConditions } : {};
    console.log(where)
    try {
        const [orders, total] = await Promise.all([
            prisma.order.findMany({
                where,
                orderBy: [
                    {
                        createdAt: 'desc',
                    },
                ],
                take: parsedLimit,
                skip: (parsedPage - 1) * parsedLimit,
                include: {
                    company: {
                        select: {
                            companyName: true,
                        }
                    },
                    buyer: {
                        select: {
                            buyerName: true,
                        }
                    },
                    fabricsType: {
                        select: {
                            fabricsName: true,
                        }
                    }
                }
            }),
            prisma.order.count({ where })
        ]);

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
    try {
        const orders = await prisma.order.findMany({

            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            select: {
                id: true,
                companyName: true,
                orderNumber: true,
                fabricsName: true,
                orderQuantity: true,
                buyerName: true,
                isBillCreated: true
            }
        });
        // const io = getIo();

        res.send(orders);
    } catch (error) {
        res.send(error);
    }
}
const getSingleOrder = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await prisma.order.findUnique({
            where: {
                id: orderId
            },
            include: {
                company: true,

            },
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getSingleOrderForEdit = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await prisma.order.findUnique({
            where: {
                id: orderId
            },
            include: {
                company: true,
                buyer: true,
                fabricsType: true,
                details: true

            },
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getSingleOrderQuantityInfo = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await prisma.order.findUnique({
            where: {
                id: orderId
            },
            select: {
                orderQuantity: true,
                restQuantity: true,
                deliveredQuantity: true,
                status: true,
            }
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
        const newOrder = await prisma.order.create({
            data: orderBody
        });

        // const io = getIo();

        return res.status(200).send(newOrder);
    } catch (error) {
        return res.status(400).send(error.message);
    }

}
const updateOrder = async (req, res) => {
    const id = parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updatedOrder = await prisma.order.update({
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
const removeOrder = async (req, res) => {
    const id = parseFloat(req.params.id)

    try {
        const updatedOrder = await prisma.order.delete({
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
const findOrderWithPo = async (req, res) => {
    // console.log(req.body)
    const orderNumbers = req.body.map(num => String(num));

    try {
        const ordersCheck = await prisma.order.findMany({
            where: {
                orderNumber: {
                    in: orderNumbers, // Assuming req.body is your array of orderNumbers
                },
            },
            select: {
                id: true,
                companyId: true,
                buyerId: true,
            },
            distinct: ["companyId"],
        });

        // Step 2: If more than one companyId is found, throw an error
        if (ordersCheck.length > 1) {
            return res.status(404).send("Order numbers belong to different companies and Different Buyers");
        }

        // Using Prisma's parameterized query to avoid SQL injection
        const result = await prisma.$queryRaw`
            SELECT 
              companyId, 
              fabricsName, 
              fabricsId, 
              GROUP_CONCAT(id) as orderId, 
              SUM(deliveredQuantity) as deliveredQuantity
            FROM 
              \`Order\`
            WHERE 
              orderNumber IN (${Prisma.join(orderNumbers)})
            GROUP BY 
              companyId, 
              fabricsName, 
              fabricsId;
        `;

        console.log(result);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(404).send(error);
    }
}

// const findOrderWithPo = async (req, res) => {
//     try {
//         const orders = await prisma.order.findMany({

//             where: {
//                 orderNumber: {
//                     in: req.body
//                 }, 
//             },
//             // _sum: {
//             //     orderQuantity: true,
//             // },
//         })
//         res.send(orders);
//     } catch (error) {
//         console.log(error)
//         res.send(error);
//     }
// }


module.exports = { getAllOrder, findOrderWithPo, getSingleOrderForEdit, getAllOrderForInvoice, getSingleOrderQuantityInfo, getSingleOrder, createOrder, updateOrder, removeOrder }