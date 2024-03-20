const express = require("express")
const router = express.Router();
const blogController = require("../controllers/blogControllers")
const authenticate = require("../middleware/authenticate")


router.post("/",authenticate.validateToken,blogController.postBlog);

router.get("/",authenticate.validateToken,blogController.listBlogs);
router.put("/:id",authenticate.validateToken,blogController.updateBlog);
router.delete("/:id",authenticate.validateToken,blogController.deleteBlog);
module.exports = router;