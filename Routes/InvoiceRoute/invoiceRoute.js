const express = require('express')
const { createProformaInvoice ,getAllProformaInvoices,getSingleProformaInvoice,deleteSingleProformaInvoice} = require('../../Controller/InvoiceController/invoiceController')
const router = express.Router()

router.post('/api/v1/proformaInvoice',createProformaInvoice)
router.get('/api/v1/proformaInvoice',getAllProformaInvoices)
router.get('/api/v1/proformaInvoice/:id',getSingleProformaInvoice)

router.delete('/api/v1/proformaInvoice/:id',deleteSingleProformaInvoice)
module.exports=router