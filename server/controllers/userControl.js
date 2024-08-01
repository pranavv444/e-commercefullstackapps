const Users = require('../models/userModel');
const catchAsyncErrors = require("../utils/catchAysncErrors")
const userControl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
       

            const user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: "Email Already Registered" });
            }
            if (password.length < 6) {
                return res.status(400).json({ msg: "Password must be at least 6 characters" });
            }

            const newUser = new Users({
                name,
                email,
                password
            });

            await newUser.save();
            res.json({ msg: "Registration Success" });
            console.log(newUser);

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}


// const userControl= {
//     register: catchAsyncErrors(async (req, res,next) => {
     
//             const { name, email, password } = req.body;
       

//             const user = await Users.findOne({ email });
//             if (user) {
//                 return res.status(400).json({ msg: "Email Already Registered" });
//             }
//             if (password.length < 6) {
//                 return res.status(400).json({ msg: "Password must be at least 6 characters" });
//             }

//             const newUser = new Users({
//                 name,
//                 email,
//                 password
//             });

//             await newUser.save();
//             res.json({ msg: "Registration Success" });
//             console.log(newUser);

//        next();
//     })
// }
module.exports = userControl;
