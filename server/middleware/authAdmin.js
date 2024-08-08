const Users=require('../models/userModel')
const authAdmin=async(req,res,next)=>{
    try{
        const user=await Users.findOne({
            _id:req.user.id
            // _id:"66b274e25a3f4f1743e8933e"
        })
        console.log("user object in authAdmin ",user);
        if(user.role===0){
            return res.status(400).json({msg:"Admin Resources Access Denied"})
            next()

        }
        next();

    }
    catch(err){
        return res.status(500).json({msg:err.message})

    }
}

module.exports=authAdmin
