const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")

const generateToken=(user)=>{
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    return token;
}

const validateToken = (req,res,next)=>{

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if(token==null){
       return res.status(401) //unauthorized
    }
   
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.sendStatus(403)
        }
       
        req.user =user;
       
    })
    next()

}
module.exports = {generateToken,validateToken}