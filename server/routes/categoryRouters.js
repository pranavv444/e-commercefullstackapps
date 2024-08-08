const router=require('express').Router()
const categoryControllers=require('../controllers/categoryControllers')
const auth=require('../middleware/auth')
const authAdmin=require('../middleware/authAdmin')
router.route('/category')
.get(categoryControllers.getCategories)
.post(auth,authAdmin,categoryControllers.createCategory);
// router.route('/category').post(categoryControllers.createCategory)
module.exports=router