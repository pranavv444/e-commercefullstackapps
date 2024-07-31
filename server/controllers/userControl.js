const Users=require('../models/userModel')

const userControl={
    register:async(req,res)=>{
        try{
            const {name,email,password}=req.body; // importing from userModel

            const user=await Users.findOne({email})
            if(user){
                return res.status(400).json({msg:"Email Already Registered"}) //for users who are already registered this msg will appear
            }
            if(password.length<6){
                return res.status(400).json({msg:"Password is at least 6 characters"})
            } // if pw length is less than 6 then this cmd will run

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports=userControl  