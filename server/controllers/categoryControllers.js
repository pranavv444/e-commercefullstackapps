const Category=require('../models/categoryModels')
const categoryControllers={
    getCategories:async(req,res)=>{
        try{
            const categories=await Category.find();
            res.json(categories)

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    createCategory:async(req,res)=>{
        try{
            const {name}=req.body;
            const category=await Category.findOne({name})
            console.log("category in post:",category)
            if(category){
                return res.status(400).json({msg:"Category Already Exists"})

            }
            const newCategory=new Category({name})
           const catRes= await newCategory.save()
           console.log("CatRes",catRes);
           res.json('Created a category')

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    deleteCategory:async(req,res)=>{
        try{
            await Category.findByIdAndDelete(req.params.id);
            res.json({msg:"Deleted a category"})

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateCategory:async(req,res)=>{
        try{
            const {name}=req.body;
            await Category.findByIdAndUpdate({_id:req.params.id},{name})
            res.json({msg:"Updated"})

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    }


}
module.exports=categoryControllers


