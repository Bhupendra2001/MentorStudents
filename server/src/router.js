const router = require('express').Router()
const {createProduct , getProduct , deleteProduct , updateProduct} = require('./Controller/productController')


router.post('/products',createProduct )
router.get('/products' , getProduct)
router.put('/products/:id' , updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router