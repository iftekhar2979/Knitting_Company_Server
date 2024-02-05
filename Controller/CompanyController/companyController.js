
const {PrismaClient}=require('@prisma/client')
const prisma = new PrismaClient()


const getSingleCompany = async (req, res) => {
    const companyId =parseFloat(req.params.id)
    try {
        const companyWithBuyers = await prisma.company.findFirst({
            where: {
                id: companyId,
            },
            include: {
                buyers: true,
            },
        });
        res.send(companyWithBuyers);
    } catch (error) {
        res.send(error);
    }
}
 const getAllCompanyWithBuyers = async (req, res) => {
    try {
        const companiesWithBuyers = await prisma.company.findMany({
            include: {
                buyers: true,
            },
        });
        res.status(200).send(companiesWithBuyers);
    } catch (error) {
       return HandleError(404,error,res)
    }
}
const createCompany=async(req,res)=>{
    const body=req.body
    try {
        const newCompany = await prisma.company.create({
           data:body
        });
       return res.status(200).send(newCompany);
    } catch (error) {
        console.log(error)
        return  res.send(error.message);
    }
}
const updateCompany = async (req, res) => {
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
const removeCompany=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const removeCompany = await prisma.company.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removeCompany});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
module.exports={getSingleCompany,getAllCompanyWithBuyers,createCompany,updateCompany,removeCompany}