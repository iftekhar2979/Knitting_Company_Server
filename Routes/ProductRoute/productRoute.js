const express = require('express')
const { getSingleProduct, createProduct, updateProduct, removeProduct, getAllProduct } = require('../../Controller/ProductController/productController')

const router = express.Router()

router.get('/product/fabrics',getAllProduct)
router.get('/product/fabrics/:id',getSingleProduct)
router.post('/product/fabrics',createProduct)
router.patch('/product/fabrics/:id',updateProduct)
router.delete('/product/fabrics/:id',removeProduct)


module.exports=router