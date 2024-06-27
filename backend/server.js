import express from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv"
import connectMongoDB from "./db/connectMongoDB.js";
const app = express();
const PORT = process.env.PORT;
dotenv.config()
app.use("/api/auth", authRoutes)
app.listen(3000, ()=>{
    console.log(`server is running on ${PORT}`)
    connectMongoDB();
})