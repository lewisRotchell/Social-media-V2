import express from "express";
import {
  createPost,
  deletePost,
  getFollowingPosts,
  getPosts,
  toggleLike,
} from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPosts);
router.route("/newsfeed").get(protect, getFollowingPosts);
router.route("/like/:id").patch(protect, toggleLike);
router.route("/:id").delete(protect, deletePost);

export default router;
