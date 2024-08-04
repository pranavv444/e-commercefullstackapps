const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config()
const cookieParser=require('cookie-parser')
const app=express();
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
const PORT=process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.json({msg:"This is example"});
})
app.listen(PORT,()=>{
    console.log("Server is running...");
})

//routes testing
app.use('/user',require('./routes/useRouter'))
app.use('/api',require('./routes/categoryRouters'))


//connecting mongob

const URI=process.env.MONGODB_URL;
const options={
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(URI).then(()=>{
    console.log("MongoDB Connected");
}).catch(err=>{
    console.log(err);
})



process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// Error handling for unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});


