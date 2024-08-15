import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary"
import cors from "cors"

import connectMongoDB from "./db/connectMongoDB.js";

import notificationRoutes from "./routes/notification.routes.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from  "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
const app = express();
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
const PORT = process.env.PORT || 3000;


app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(
  cors({
    // origin: "https://todobuddy.vercel.app",
    origin: "http://localhost:5000",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);



app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/post", postRoutes)
app.use("/api/notifications", notificationRoutes)


app.listen(PORT,  ()=>{
     connectMongoDB();
    console.log(`server is running on ${PORT}`)
})