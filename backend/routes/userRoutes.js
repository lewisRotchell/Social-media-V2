import express from "express";
import {
  followAndUnfollowUser,
  getUsers,
  getUserByUsername,
  getUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser);
router.route("/get-users").post(getUserByUsername);
router.route("/follow/:id").patch(protect, followAndUnfollowUser);

export default router;
