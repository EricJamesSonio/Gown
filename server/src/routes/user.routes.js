import express from "express";
import * as userController from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/profile", verifyToken, userController.profile);

export default router;
