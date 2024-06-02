const express = require('express')
const { getSingleProduct, createProduct, updateProduct, removeProduct, getAllProduct } = require('../../Controller/ProductController/productController')
const { protect } = require('../../Middlewares/protectMiddleware')

const router = express.Router()

router.get('/api/product/fabrics',protect,getAllProduct)
router.get('/api/product/fabrics/:id',protect,getSingleProduct)
router.post('/api/product/fabrics',protect,createProduct)
router.patch('/api/product/fabrics/:id',protect,updateProduct)
router.delete('/api/product/fabrics/:id',protect,removeProduct)


module.exports=router