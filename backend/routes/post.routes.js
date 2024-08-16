import express from "express"
import { protectRoutes } from "../middleware/protecRoutes.js";
import {createPost, deletePost, commentOnPost, getSavedPosts, likeUnlikePost,savePost, getAllPosts,getLikedPosts, getFollowingPosts, getUserPosts} from "../controllers/post.controller.js"
const router = express.Router();
router.get("/following", protectRoutes, getFollowingPosts)
router.get("/all", protectRoutes, getAllPosts)
router.get("/user/:username", protectRoutes, getUserPosts)
router.get("/like/:id", protectRoutes, getLikedPosts)
router.get("/save/:id", protectRoutes, getSavedPosts)
router.post("/create", protectRoutes, createPost);
router.post("/like/:id", protectRoutes, likeUnlikePost);
router.post("/save/:id", protectRoutes, savePost);
router.post("/comment/:id", protectRoutes, commentOnPost)
router.delete("/:id", protectRoutes, deletePost);

export default router;