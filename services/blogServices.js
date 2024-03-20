const Blog = require("../models/blog")
const User = require("../models/user")



const create =  async(blogData,author)=>{
    try{
        const {title,content} =  blogData;
        const blog = await Blog.create({title,content,author});
        return blog;

    }catch(err){
        throw err;
    }


}
const listBlogs = async()=>{
    try{

        const bloglists = await Blog.find({})
        return bloglists;
    }catch(err){
        throw err;
    }
}

const updateBlog=async(id, user_Id,newData)=>{

   
   
    const findBlog = await Blog.findOne({_id:id})
    if(!findBlog){
        throw new Error("Blog not available")
    }
   
    const blog_id = findBlog.author.toString()

    if(user_Id!=blog_id){
        throw new Error("Invalid operation")
    }
    const updatedBlog = await Blog.findOneAndUpdate({_id:id},newData,{new:true});
    return updatedBlog;

}
const deleteBlog = async(author,id)=>{
    try{
        const findBlog = await Blog.findOne({_id:id})
    if(!findBlog){
        throw new Error("Blog not available")
    }
    
    if(author!=findBlog.author){
        throw new Error("Unable to delete other user post")
    }
    await Blog.findOneAndDelete({_id:id});
    return;
    }
    catch(err){
        throw err;
    }
}
module.exports = {create,listBlogs,updateBlog,deleteBlog};