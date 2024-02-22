
const {PrismaClient}=require('@prisma/client')
const prisma = new PrismaClient()


const getSingleProduct = async (req, res) => {
    const fabricsId =parseFloat(req.params.id)
    try {
        const companyWithBuyers = await prisma.fabricsType.findFirst({
            where: {
                id: fabricsId,
            },
        });
        res.send(companyWithBuyers);
    } catch (error) {
        res.send(error);
    }
}
 const getAllProduct = async (req, res) => {
    try {
        const fabricsTypes = await prisma.fabricsType.findMany({  
        });
        res.status(200).send(fabricsTypes);
    } catch (error) {
       return HandleError(404,error,res)
    }
}
const createProduct=async(req,res)=>{
    const body=req.body
    try {
        const newfabricsType = await prisma.fabricsType.create({
           data:body
        });
       return res.status(200).send(newfabricsType);
    } catch (error) {
        console.log(error)
        return  res.send(error.message);
    }
}
const updateProduct = async (req, res) => {
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const updateCompany = await prisma.company.update({
            where:{
                id:id
            },
            data: updatedBody
        });
        return res.status(200).send({isUpdated:true,updateCompany});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeProduct=async(req,res)=>{
    const id=parseFloat(req.params.id)
    try {
        const removefabricsType = await prisma.fabricsType.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removefabricsType});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
module.exports={getSingleProduct,getAllProduct,createProduct,updateProduct,removeProduct}