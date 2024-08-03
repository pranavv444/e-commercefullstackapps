const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('../routes/useRouter');

const userControl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Check if all required fields are provided
            if (!name || !email || !password) {
                return res.status(400).json({ msg: "Please provide all required fields" });
            }

            // Check if user already exists
            const user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: "Email Already Registered" });
            }

            // Validate password length
            if (password.length < 6) {
                return res.status(400).json({ msg: "Password must be at least 6 characters" });
            }

            // Password encryption
            const passwordHash = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new Users({
                name,
                email,
                password: passwordHash
            });

            // Save user to database
            await newUser.save();

            // Create JWT tokens
            const accesstoken = createAccessToken({ id: newUser._id });
            const refreshtoken = createRefreshToken({ id: newUser._id });

            // Set refresh token as cookie
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            // Send access token and success message
            res.json({ accesstoken, msg: "Registration Success" });
            console.log(newUser);

        } catch (err) {
            console.error(err); // Log error to console
            return res.status(500).json({ msg: err.message });
        }
    },
    refreshtoken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(400).json({ msg: "Please Login or Register" });

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({ msg: "Please Login or Register" });

                const accesstoken = createAccessToken({ id: user.id });
                res.json({ user,accesstoken });
            });
        } catch (err) {
            console.error(err); // Log error to console
            return res.status(500).json({ msg: err.message });
        }
    },
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;

            const user=await Users.findOne({email})
            if(!user){
                return res.status(400).json({msg:"User does not exist"});
            }
            const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(400).json({msg:"Incorrect"});
            }

            const accesstoken=createAccessToken({id:user._id});
            const refreshtoken=createRefreshToken({id:user._id});

            res.cookie('refreshtoken',refreshtoken,{
                httpOnly:true,
                path:'/user/refresh_token'
            })
            res.json({accesstoken});

        }
        catch(err){
            return res.status(500).json({msg:err.message});

        }
    },
    logout:async(req,res)=>{
        try{
            res.clearCookie('refreshtoken',{path:'/user/refresh_token'});
            return res.json({msg:"Log Out"});

        }
        catch(err){

        }
    }
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports = userControl;