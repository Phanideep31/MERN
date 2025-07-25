export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const isProduction = process.env.NODE_ENV === "production";

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: isProduction,                // ✅ only true in production
    sameSite: isProduction ? "None" : "Lax", // ✅ "None" needed for cross-origin
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
