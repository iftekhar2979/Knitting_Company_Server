const express = require('express')
const { getAllCompanyWithBuyers,getSingleCompany, createCompany, updateCompany, removeCompany} = require('../../Controller/CompanyController/companyController')
const router = express.Router()

router.get('/company',getAllCompanyWithBuyers)
router.get('/company/:id',getSingleCompany)
router.post('/company',createCompany)
router.patch('/company',updateCompany)
router.delete('/company',removeCompany)

module.exports=router