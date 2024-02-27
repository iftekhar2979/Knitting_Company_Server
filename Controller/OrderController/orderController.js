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
const getSingleOrder = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    try {
        const orders = await prisma.order.findUnique({
            where: {
                id: orderId
            },
            include: {
                company:true
                
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
            select:{
                orderQuantity:true,
                restQuantity:true,
                status:true,
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
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updatedOrder = await prisma.order.update({
            where:{
                id:id
            },
            data: updatedBody
        });
        return res.status(200).send({isUpdated:true,updatedOrder});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeOrder=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const updatedOrder = await prisma.order.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, updatedOrder});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
const findOrderWithPo = async (req, res) => {
    try {
        const orders = await prisma.order.aggregate({
            where: {
                poNumber: '12345'
            },
            _sum: {
                orderQuantity: true,
            },
        });
        console.log(orders)
        res.send(orders);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}
module.exports = { getAllOrder, findOrderWithPo,getSingleOrderQuantityInfo, getSingleOrder, createOrder,updateOrder,removeOrder }