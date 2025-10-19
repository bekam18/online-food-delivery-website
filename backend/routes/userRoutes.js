import express from "express";
import { signupUser, loginUser } from "../controllers/userController.js"; // ✅ updated import

const router = express.Router();

// ✅ Match frontend endpoints
router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
