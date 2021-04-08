import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../utils/AppError.js";

const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  if (!users) {
    return next(new AppError("No user found ", 400));
  }

  res.status(200).json({
    status: "success",
    users,
  });
});

const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError("No user found with that ID ", 400));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

const getUserByUsername = catchAsync(async (req, res, next) => {
  const { username } = req.body;

  const user = await User.find({
    //finds the username if one letter is typed in
    username: { $regex: `^${username}`, $options: "i" },
  }).select("_id username photo");

  if (!user) {
    return next(new AppError("No user found", 400));
  }

  res.status(200).json({
    status: "success",
    users: user,
  });
});

const followAndUnfollowUser = catchAsync(async (req, res, next) => {
  const user = req.user;
  const userToFollow = await User.findById(req.params.id);

  // check if user is already followed
  const alreadyFollowing = user.following.find(
    (i) => i.toString() === req.params.id
  );
  console.log(req.params.id);
  console.log(alreadyFollowing);
  if (!alreadyFollowing) {
    //If user isn't following add follower
    user.following.push(req.params.id);
    await user.save();

    userToFollow.followers.push(user._id);
    await userToFollow.save();
  } else {
    //remove follower
    //Get the remove index
    let removeIndex = user.following.indexOf(req.params.id);
    user.following.splice(removeIndex, 1);
    await user.save();

    removeIndex = userToFollow.followers.indexOf(user.following);
    userToFollow.followers.splice(removeIndex, 1);
    await userToFollow.save();
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

export { followAndUnfollowUser, getUsers, getUserByUsername, getUser };
