import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";
import User from "../models/userModel.js";

//Protect routes

const protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  //Make sure token exists

  if (!token) {
    return next(new AppError("Not Authorized", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //allow the user to be stored in req.user for future queries
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return next(new AppError("Not Authorized", 401));
  }
});

export { protect };
