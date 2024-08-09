const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2; // Assuming cloudinary is set up
const router = express.Router();
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs');
const path = require('path');

// Create temp directory if it doesn't exist
const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

// Middleware for file uploads
router.use(fileUpload());
// app.use(fileUpload());
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

router.post('/upload', auth, authAdmin, (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {

            return res.status(400).send({ msg: "No files were uploaded" });
        }

        const file = req.files.file;
        if (file.size > 1024 * 1024) {
            return res.status(400).json({ msg: "Size too large" });
        }

        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            return res.status(400).json({ msg: "File format is incorrect" });
        }

const filePath = path.join(__dirname, 'temp', file.name);
        file.mv(filePath, (err) => {
            if (err) return res.status(500).send(err);
        
            cloudinary.uploader.upload(filePath, { folder: 'test' }, (err, result) => {
                if (err) throw err;
        
                // Optionally delete the temporary file
                fs.unlinkSync(filePath);
        
                res.json({ public_id: result.public_id, url: result.secure_url });
            });
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

router.post('/destroy', auth, authAdmin, (req, res) => {
    try {
        const { public_id } = req.body;
        if (!public_id) return res.status(400).json({ msg: "No images selected" });

        cloudinary.uploader.destroy(public_id, (err, result) => {
            if (err) throw err;
            res.json({ msg: "Deleted" });
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    });
};

module.exports = router;


// const router = require('express').Router()
// const cloudinary = require('cloudinary')
// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')
// const fs = require('fs')

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key : process.env.CLOUD_API_KEY,
//     api_secret : process.env.CLOUD_API_SECRET
// })

// router.post('/upload',auth,authAdmin, (req,res)=> {
//     try{
//          if(!req.files || Object.keys(req.files).length ===0){

//              console.log("req.files:",req.files);
//              console.log("object.keys(req.files)",Object.keys(req.files));
//              return res.status(400).send({msg: "No file were uploaded"})
//              console.log(req.files)
//          }

//         const file = req.files.file;
//         if(file.size > 1024*1024){
//             removeTmp(file.tempFilePath)
//             return res.status(400).json({msg:"Size too large"})
//         } 

//         if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png')
//         {
//         removeTmp(file.tempFilePath)
//         return res.status(400).json({msg:"File format is incorrect"})
//         }

//          cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'test'},async(err,result) => {
//             if(err) throw err;

//             removeTmp(file.tempFilePath)

//             res.json({public_id:result.public_id,url:result.secure_url})
//          })
//     }
//     catch(err){
//         res.status(500).json({msg:err.message})
//     }
// })

// router.post('/destroy',auth,authAdmin,(req,res)=> {
//     try{
//         const {public_id}  = req.body;
//         if(!public_id) return res.status(400).json({msg:"No images Selected"})

//         cloudinary.v2.uploader.destroy(public_id,async(err,result) => {
//             if(err) throw err

//             res.json({msg:"Deleted"})
//         })
//     }catch(err){
//         return res.status(500).json({msg:err.message})
//     }
// })

// const removeTmp = (path) => {
//     fs.unlink(path,err => {
//         if(err) throw err;
//     })
// }

// module.exports = router