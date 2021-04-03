import express from "express";
import {
  login,
  register,
  getUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(protect, getUserProfile);

export default router;
