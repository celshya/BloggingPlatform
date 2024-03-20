const authService = require("../services/authService")

const register = async(req,res)=>{
    try{
        const userdata = req.body;
        const user = await authService.register(userdata);
        res.status(201).json(user);

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
const login = async(req,res)=>{
    try{
        const userdata = req.body;
        const {user,token} = await authService.login(userdata);
        req.token = token;
   
        res.status(200).json({message:"user registered Succesfully",user,token})
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {register,login}