import express from "express";
import {
  createPost,
  deletePost,
  getFollowingPosts,
  getPosts,
  toggleLike,
  getPostsByUser,
} from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPosts);
router.route("/newsfeed").get(protect, getFollowingPosts);
router.route("/like/:id").patch(protect, toggleLike);
router.route("/:id").delete(protect, deletePost);
router.route("/user/:userId").get(getPostsByUser);

export default router;
