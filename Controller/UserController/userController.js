
const {PrismaClient}=require('@prisma/client')
const prisma = new PrismaClient()


const getSingleUser = async (req, res) => {
    const userId =parseFloat(req.params.id)
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },

        });
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const companiesWithBuyers = await prisma.user.findMany({});
        res.status(200).send(companiesWithBuyers);
    } catch (error) {
        res.status(404).send(error);
    }
}
const createUser=async(req,res)=>{
    const body=req.body
    try {
        const newUser = await prisma.user.create({
           data:body
        });
       return res.status(200).send(newUser);
    } catch (error) {
        console.log(error)
        return  res.status(400).send(error.message);
    }
}
const updateUser = async (req, res) => {
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updatedUser = await prisma.user.update({
            where:{
                id:id
            },
            data: updatedBody
        });
        return res.status(200).send({isUpdated:true,updatedUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeUser=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const removeUser = await prisma.user.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removeUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
module.exports={getAllUsers,getSingleUser,createUser,updateUser,removeUser}