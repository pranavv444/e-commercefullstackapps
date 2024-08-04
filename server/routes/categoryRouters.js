const router=require('express').Router()
const categoryControllers=require('../controllers/categoryControllers')
router.route('/category')
.get(categoryControllers.getCategories)

module.exports=router