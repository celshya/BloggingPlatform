const blogService = require("../services/blogServices")

const postBlog = async(req,res)=>{
    try{
    const blogdata = req.body;
    const author = req.user.id;
    
    
    const data = await blogService.create(blogdata,author);
   
    res.status(201).json(data)

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    

}

const listBlogs = async(req,res)=>{
    try{

        const listblog = await blogService.listBlogs();
        res.status(200).json(listblog)

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}
const updateBlog = async(req,res)=>{
    try{
        const {id} = req.params;
     
        const user_Id = req.user.id;
        const newData = req.body;
        const updatedBlog = await blogService.updateBlog(id,user_Id,newData);
        res.status(200).json({message:"Blog updated successfully",updatedBlog})

    }catch(err){
        res.status(500).json({
            message:err.message
        })

    }

}

const deleteBlog = async(req,res)=>{
    try{
        const {id} = req.params;
        const author = req.user.id;
         await blogService.deleteBlog(author,id);
        res.status(200).json({message:"Blog deleted successfully"})
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}
module.exports = {postBlog,listBlogs,updateBlog,deleteBlog}