import express from "express"
import { protectRoutes } from "../middleware/protecRoutes.js";
import {getUserProfile, followUnfollowUser, getSuggestedUser , updateUserProfile} from "../controllers/user.controller.js"
const router = express.Router();

router.get("/profile/:username",protectRoutes, getUserProfile)
router.get("/suggested",protectRoutes, getSuggestedUser)
router.post("/follow/:id",protectRoutes, followUnfollowUser)
router.post("/update",protectRoutes, updateUserProfile)
export default router;