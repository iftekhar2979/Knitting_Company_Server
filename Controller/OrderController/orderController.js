const { PrismaClient } = require('@prisma/client')
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
            select:{
                id:true,
                companyName:true,
                orderNumber:true,
                fabricsName:true,
                orderQuantity:true,
                isProformaInvoiceCreated:true
            }
        });
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

    try {
        const newOrder = await prisma.order.create({
            data: orderBody
        });
        return res.status(200).send(newOrder);
    } catch (error) {
        console.log(error)
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
   
    try {
        const ordersCheck = await prisma.order.findMany({
            where: {
                orderNumber: {
                    in: req.body, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            select: {
                companyId: true,
                buyerId:true
            },
            distinct: ["companyId","buyerId"],
        });

        // Step 2: If more than one companyId is found, throw an error
        if (ordersCheck.length > 1) { 
          return  res.status(404).send("Order numbers belong to different companies and Different Buyers");
            // throw new Error("Order numbers belong to different companies and Different Buyers");
        }
        const orders = await prisma.order.groupBy({
            by: ["companyId", "fabricsName","buyerId","fabricsId"],
            where: {
                orderNumber: {
                    in: req.body
                }, 
            },
            _sum: {
                orderQuantity: true,
            },
        })
       return res.status(200).send(orders);
    } catch (error) {
        console.log(error)
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
module.exports = { getAllOrder, findOrderWithPo,getAllOrderForInvoice, getSingleOrderQuantityInfo, getSingleOrder, createOrder, updateOrder, removeOrder }