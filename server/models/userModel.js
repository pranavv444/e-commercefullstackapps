const mongoose=require('mongoose'); // schema definition and is a object data modeling library for mongo db and nodejs
//Mongoose is an ODM library for MongoDB. It sits between your Node.js application and the MongoDB database. Mongoose allows you to interact with MongoDB using JavaScript objects. It helps you structure your code, making it easier to work with and maintain.

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0,
    },
    cart:{
        type:Array,
        default:[] //empty
    }
},{
    timestamps:true
}
)

module.exports=mongoose.model('Users',userSchema)