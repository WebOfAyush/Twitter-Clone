import express from "express";
import {protectRoutes} from "../middleware/protecRoutes.js"
const router = express.Router();
import {signup, login, logout, getMe} from "../controllers/auth.controller.js"

router.get("/me",protectRoutes, getMe)
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;