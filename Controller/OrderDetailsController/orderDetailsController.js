const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getSingleOrderDetails = async (req, res) => {
    const orderId = parseFloat(req.params.id)
    console.log(orderId)
    try {
        const orders = await prisma.orderDetails.findUnique({
            where: {
                orderId: orderId
            },   
        });
        // console.log(orders)
        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send(error);
    }
}

const createOrderDetails = async (req, res) => {
    const orderBody = req.body
    // console.log(orderBody)
    try {
        const neworderDetails = await prisma.orderDetails.create({
            data: orderBody
        });
        return res.status(200).send(neworderDetails);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error.message);
    }

}
const updateOrderDetails = async (req, res) => {
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updatedOrder = await prisma.orderDetails.update({
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
const removeOrderDetails=async(req,res)=>{
    const id=parseFloat(req.params.id)
    try {
        const updatedOrder = await prisma.orderDetails.delete({
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

module.exports = {createOrderDetails,updateOrderDetails,getSingleOrderDetails,removeOrderDetails}