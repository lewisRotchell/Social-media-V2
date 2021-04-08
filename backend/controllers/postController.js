import catchAsync from "../utils/catchAsync.js";
import Post from "../models/postModel.js";
import AppError from "../utils/AppError.js";

const createPost = catchAsync(async (req, res, next) => {
  const user = req.user;

  // let newPost = new Post({
  //   user: req.user._id,
  //   text: req.body.text,
  // });

  // const post = await newPost.save();

  let post = await Post.create({
    user: req.user._id,
    text: req.body.text,
  });

  post = await post
    .populate({ path: "user", select: { _id: 1, username: 1, photo: 1 } })
    .execPopulate();

  res.status(200).json({
    status: "success",
    post,
  });
});

const getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find().populate({
    path: "user",
    select: { _id: 1, username: 1, photo: 1 },
  });

  res.status(200).json({
    status: "success",
    posts,
  });
});

const getFollowingPosts = catchAsync(async (req, res, next) => {
  const user = req.user;
  //Add user posts to post list to show user's own posts
  user.following.push(user._id);
  console.log(user);

  const posts = await Post.find({ user: { $in: user.following } })
    .populate({
      path: "user",
      select: { _id: 1, username: 1, photo: 1 },
    })
    .sort("-createdAt");

  res.status(200).json({
    status: "success",
    posts,
  });
});

const toggleLike = catchAsync(async (req, res, next) => {
  const user = req.user;
  const post = await Post.findById(req.params.id);
  console.log(post);
  console.log(user._id);

  if (!post) {
    return next(new AppError("Post not found", 404));
  }

  //if post hasn't been liked by this user, add a like

  if (
    post.likes.filter((like) => like.user.toString() === user._id.toString())
      .length === 0
  ) {
    post.likes.unshift({ user: user._id });
    await post.save();
  } else if (
    post.likes.filter((like) => like.user.toString() === user._id.toString())
      .length > 0
  ) {
    const removeIndex = post.likes.map((like) => {
      like.user.toString().indexOf(user._id);
    });

    post.likes.splice(removeIndex, 1);
    await post.save();
  }

  res.status(200).json({
    status: "success",
    data: post.likes,
  });
});

const deletePost = catchAsync(async (req, res, next) => {
  const user = req.user;
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new AppError("Post not found", 404));
  }

  // console.log(user._id.toString() === post.user._id.toString());

  if (user._id.toString() !== post.user._id.toString()) {
    return next(new AppError("User not authorized to delete this post"));
  }

  await post.remove();

  res.status(200).json({
    status: "success",
  });
});

const getPostsByUser = catchAsync(async (req, res, next) => {
  const user = req.params.userId;
  const posts = await Post.find({ user });

  console.log(user);

  if (!posts) {
    return next(new AppError("Posts not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: posts,
  });
});

export {
  createPost,
  getPosts,
  getFollowingPosts,
  toggleLike,
  deletePost,
  getPostsByUser,
};
