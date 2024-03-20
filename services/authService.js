const User = require("../models/user")
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")
const register = async(userData)=>{
    try{

        let user = await User.find({email:userData.email})
        if(user.length>0){
            throw new Error("User already Exists")
        }
        user = new User(userData);
        const gensalt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(userData.password,gensalt)
        await user.save();
        return user;

    }catch(err){
        throw err;
    }
}
const login = async(userData)=>{
    try{
        const{email,password} = userData;
        const user = await User.findOne({email})
        if(!user){
            throw new Error("User not exists")
        }
        const ismatch = await user.comparePassword(password);
        if(!ismatch){
            throw new Error("Password Mismatch")
        }
        const token = authenticate.generateToken(user);
   
        return {token,user};
        
    }catch(err){
        throw err;
    }
}
module.exports = {register,login}