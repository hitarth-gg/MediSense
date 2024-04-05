const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
// const { options } = require("../routes/user");
require("dotenv").config();


//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {name, email, password, role, location} = req.body;
        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists',
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err) {
            return res.status(500).json({
                success:false,
                message:'Error in hashing Password',
            });
        }

        //create entry for User
        const user = await User.create({
            name,email,password:hashedPassword,role,location
        })

        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
        });
    }
}

//login
exports.login = async (req,res) => {
    try{
        //data fetch
        const {email, password} = req.body;
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please provide email and password',
            }); 
        } 

        //check for registered user
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:'User does not exist',
            });
        }
        
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }
        //verify password and generate a JWT token 
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'2d'});
            user.token = token;
            user.password = undefined;
            
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true
            };
            //three parameters are set in cookie, 
            //1. name of the cookie, 2. data of the cookie, 3. options
            res.cookie('token',token,options).status(200).json({
                success:true,
                token,
                message:'User Logged in Successfully',
                user,
            });
        }
        else{
            //Passwords do not matvch
            return res.status(403).json({
                success:false,
                message:'Invalid Password',
            });
        }
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be logged in, please try again later',
        });
    }
}
