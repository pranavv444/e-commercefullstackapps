const router=require('express').Router()
const productControllers=require('../controllers/productControllers')
router.route('/products')
.get(productControllers.getProducts)
.post(productControllers.createProducts)

router.route ('/products/:id')
.delete(productControllers.deleteProduct)
.put(productControllers.updateProduct)

module.exports=router