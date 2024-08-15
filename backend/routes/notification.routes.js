import express from "express";
import {protectRoutes} from "../middleware/protecRoutes.js"
import { deleteNotifications, getNotifications } from "../controllers/notification.controller.js";
const router = express.Router();

router.get("/", protectRoutes, getNotifications)
router.delete("/", protectRoutes, deleteNotifications)
export default router;