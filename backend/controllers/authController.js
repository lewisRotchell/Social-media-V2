import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../utils/AppError.js";

const register = catchAsync(async (req, res, next) => {
  const { username, email, password, photo, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new AppError("User Already Exists!"), 400);
  }

  const user = await User.create({
    username,
    email,
    password,
    role,
  });

  user.password = undefined;

  res.status(201).json({
    status: "success",
    user,
    token: user.generateToken(),
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //Check if email and password exists
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  //Check if user exists and password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.matchPassword(password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //send token to client
  user.password = undefined;

  res.status(201).json({
    status: "success",
    user,
    token: user.generateToken(),
  });
});

const getUserProfile = catchAsync(async (req, res, next) => {
  const { user } = req;

  console.log(user);

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

export { register, login, getUserProfile };
