const express = require('express')
const { getSingleProduct, createProduct, updateProduct, removeProduct, getAllProduct } = require('../../Controller/ProductController/productController')
const { protect } = require('../../Middlewares/protectMiddleware')

const router = express.Router()

router.get('/product/fabrics',protect,getAllProduct)
router.get('/product/fabrics/:id',protect,getSingleProduct)
router.post('/product/fabrics',protect,createProduct)
router.patch('/product/fabrics/:id',protect,updateProduct)
router.delete('/product/fabrics/:id',protect,removeProduct)


module.exports=router