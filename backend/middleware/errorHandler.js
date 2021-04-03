import AppError from "../utils/AppError.js";

const handleValidtionErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `${errors.join(". ")}`;
  return new AppError(message, 400);
};

const errorHandler = (err, req, res, next) => {
  // let statusCode = err.statusCode === 200 ? 500 : err.statusCode;
  if (err.name === "ValidationError") err = handleValidtionErrorDB(err);

  console.log(err.errors);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
};

export default errorHandler;
