const Products=require('../models/productModel')
const productControllers={
    getProducts:async(req,res)=>{
        try{
            const products=await Products.find();
            res.json(products)


        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    createProducts:async(req,res)=>{
        try{

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    deleteProduct:async(req,res)=>{
        try{

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    },
    updateProduct:async(req,res)=>{
        try{

        }
        catch(err){
            return res.status(500).json({msg:err.message})

        }
    }
}

module.exports=productControllers