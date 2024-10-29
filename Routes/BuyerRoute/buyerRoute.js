const express = require('express')
const { getAllBuyers, getSingleBuyer, createBuyer, updateBuyer, removeBuyer } = require('../../Controller/BuyerController/buyerController')
const { protect } = require('../../Middlewares/protectMiddleware')
const router = express.Router()

router.get('/api/buyer',protect,getAllBuyers)
router.get('/api/buyer/:id',protect,getSingleBuyer)
router.post('/api/buyer',protect,createBuyer)
router.patch('/api/buyer/:id',protect,updateBuyer)
router.delete('/api/buyer/:id',protect,removeBuyer)

module.exports=router
