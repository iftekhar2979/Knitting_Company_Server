const express = require('express')
const { getAllCompanyWithBuyers,getSingleCompany, createCompany, updateCompany, removeCompany} = require('../../Controller/CompanyController/companyController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.get('/company',protect,getAllCompanyWithBuyers)
router.get('/company/:id',protect,getSingleCompany)
router.post('/company',protect,createCompany)
router.patch('/company/:id',protect,updateCompany)
router.delete('/company/:id',protect,removeCompany)

module.exports=router