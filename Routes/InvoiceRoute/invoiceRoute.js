const express = require('express')
const { createProformaInvoice ,getAllProformaInvoices,getSingleProformaInvoice,deleteSingleProformaInvoice, getSingleBill, createBill, getAllBill, deleteSingleBill} = require('../../Controller/InvoiceController/invoiceController')
const {  adminProtect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.post('/api/v1/proformaInvoice',adminProtect,createProformaInvoice)
router.get('/api/v1/proformaInvoice',adminProtect,getAllProformaInvoices)
router.get('/api/v1/proformaInvoice/:id',adminProtect,getSingleProformaInvoice)
router.get("/api/v1/bill/:id",adminProtect,getSingleBill)
router.post("/api/v1/bill",adminProtect,createBill)
router.get("/api/v1/bill",adminProtect,getAllBill)
router.delete('/api/v1/proformaInvoice/:id',adminProtect,deleteSingleProformaInvoice)
router.delete('/api/v1/bill/:id',adminProtect,deleteSingleBill)
module.exports=router