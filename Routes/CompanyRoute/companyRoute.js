const express = require('express')
const { getAllCompanyWithBuyers,getSingleCompany, createCompany, updateCompany, removeCompany} = require('../../Controller/CompanyController/companyController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.get('/api/company',protect,getAllCompanyWithBuyers)
router.get('/api/company/:id',protect,getSingleCompany)
router.post('/api/company',protect,createCompany)
router.patch('/api/company/:id',protect,updateCompany)
router.delete('/api/company/:id',protect,removeCompany)

module.exports=router