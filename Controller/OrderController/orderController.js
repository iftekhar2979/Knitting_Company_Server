const { PrismaClient, Prisma } = require('@prisma/client');
const {getIo} =require("../../socket.js")

const prisma = new PrismaClient()

const getAllOrder = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
        });
        const io = getIo();
        io.emit('allorder', orders);
        res.send(orders);
    } catch (error) {
        res.send(error);
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
        const io = getIo();
        io.emit('allorder', orders);
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
                deliveredQuantity:true,
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
      
        const io = getIo();
        io.emit('allorder', await prisma.order.findMany({ orderBy: { createdAt: 'desc' }})); // Emit updated orders
        io.emit('notification', `A new Order has been added ${newOrder.orderNumber}`);
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
      
        const io = getIo();
        io.emit('allorder', await prisma.order.findMany({ orderBy: { createdAt: 'desc' }})); // Emit updated orders
        io.emit('notification', `A Order has been Deleted ${updatedOrder.orderNumber}`);
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
              \`order\`
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