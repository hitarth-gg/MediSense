//auth, isStudent , isAdmin are middleware functions that are used to protect the routes.
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) => {
    try{
        //extract token 
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");  //req.header["Authorization"] is the key to access the token
        if(!token || token === undefined || token === ""){
            return res.status(401).json({
                success:false,
                message:"No token, authorization denied",
            });
        }
         
        //verify token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;

        }
        catch(err){
            console.error(err);
            return res.status(401).json({
                success:false,
                message:"Invalid Token",
            });
        }
        next();       
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while verifying the token",
        });
    }
}

exports.isFacilitator = (req,res,next) => {
    try{
        if(req.user.role === "Facilitator"){
            next();
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Facilitator Access Denied",
            });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while verifying the facilitator role",
        });
    }
}

exports.isDoctor = (req,res,next) => {
    try{
        if(req.user.role === "Doctor"){
            next();
        }
        else{
            return res.status(403).json({
                success:false,
                message:"Doctor Access Denied",
            });
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while verifying the doctor role",
        });
    }
}

