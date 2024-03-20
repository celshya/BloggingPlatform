const mongoose = require("mongoose")


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"Title 1"
    },
    content:{
        type:String,
        default:"content goes here"
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{timestamps:true})

const Blog = mongoose.model("Blog",blogSchema)


module.exports = Blog;