const category=require('../models/categoryModels')
const categoryControllers={
    getCategories:async(req,res)=>{
        try{
            const categories=await category
            res.json(categories)

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    createCategory:async(req,res)=>{
        try{
            res.json('Check Admin Access')

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    }

}
module.exports=categoryControllers