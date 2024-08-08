const router=require('express').Router()
const categoryControllers=require('../controllers/categoryControllers')
const auth=require('../middleware/auth')
const authAdmin=require('../middleware/authAdmin')
router.route('/category')
.get(categoryControllers.getCategories)
.post(auth,authAdmin,categoryControllers.createCategory);
// router.route('/category').post(categoryControllers.createCategory)

router.route('/category/:id')
.delete(auth,authAdmin,categoryControllers.deleteCategory)
.put(auth,authAdmin,categoryControllers.updateCategory)
module.exports=router

