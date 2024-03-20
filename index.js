const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const cors = require('cors');
const app = express();
PORT = process.env.PORT || 5000
const authRoutes = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log("Db connected Successfully!")
})
app.use("/api/auth",authRoutes)
app.use("/api/blog",blogRoutes)

app.listen(PORT,()=>{
    console.log("Server is listening in port",PORT)
})