const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    "username":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    }
    
},{timestamps:true})

userSchema.methods.comparePassword = async function(userpassword){
    return await bcrypt.compare(userpassword,this.password)
}

const User = mongoose.model("User",userSchema)


module.exports = User;