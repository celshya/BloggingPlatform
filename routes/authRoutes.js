const express = require("express")
const router = express.Router();
const authController = require("../controllers/authControllers")
const authenticate = require("../middleware/authenticate")

router.post("/register",authController.register)
router.post("/login",authController.login)
router.get("/check",authenticate.validateToken,(req,res)=>{
    
    console.log("Cheked ")
})

module.exports = router;