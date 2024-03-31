const express = require('express')
const { createProformaInvoice ,getAllProformaInvoices,getSingleProformaInvoice,deleteSingleProformaInvoice} = require('../../Controller/InvoiceController/invoiceController')
const { protect, adminProtect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.post('/api/v1/proformaInvoice',adminProtect,createProformaInvoice)
router.get('/api/v1/proformaInvoice',adminProtect,getAllProformaInvoices)
router.get('/api/v1/proformaInvoice/:id',adminProtect,getSingleProformaInvoice)

router.delete('/api/v1/proformaInvoice/:id',adminProtect,deleteSingleProformaInvoice)
module.exports=router