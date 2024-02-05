const express = require('express')
const { getAllBuyers, getSingleBuyer, createBuyer, updateBuyer, removeBuyer } = require('../../Controller/BuyerController/buyerController')
const router = express.Router()

router.get('/buyer',getAllBuyers)
router.get('/buyer/:id',getSingleBuyer)
router.post('/buyer',createBuyer)
router.patch('/buyer/:id',updateBuyer)
router.delete('/buyer/:id',removeBuyer)

module.exports=router
