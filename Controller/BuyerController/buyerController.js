
const {PrismaClient}=require('@prisma/client')
const prisma = new PrismaClient()

const getSingleBuyer= async (req, res) => {
    const buyerId =parseFloat(req.params.id)
    try {
        const buyer= await prisma.buyer.findFirst({
            where: {
                id: buyerId,
            },

        });
        res.status(200).send(buyer);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getAllBuyers = async (req, res) => {
    try {
        const buyers = await prisma.buyer.findMany({});
        res.status(200).send(buyers);
    } catch (error) {
        res.status(404).send(error);
    }
}
const createBuyer=async(req,res)=>{
    const body=req.body
    try {
        const newBuyer= await prisma.buyer.create({
           data:body
        });
       return res.status(200).send(newBuyer);
    } catch (error) {
        console.log(error)
        return  res.status(400).send(error.message);
    }
}
const updateBuyer= async (req, res) => {
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updatedBuyer= await prisma.buyer.update({
            where:{
                id:id
            },
            data: updatedBody
        });
        return res.status(200).send({isUpdated:true,updatedBuyer});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeBuyer=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const removeBuyer= await prisma.buyer.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removeBuyer});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
module.exports={getAllBuyers,getSingleBuyer,createBuyer,updateBuyer,removeBuyer}