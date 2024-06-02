const { generateAccessToken } = require("../helpers/token.helper");
const User = require("../models/user");

const ApiError = require("../utils/ApiError");
const { setAccessCookie, clearCookies } = require("../services/cookie.helper");
const { userService } = require(".");
const jwt = require("jsonwebtoken");

// Login Service - Login a user
const attemptLogin = async (res, email, password) => {
  if (!email || !password) {
    throw new ApiError(400, "Please fill all fields");
  }

  const foundUser = await User.findOne({ email });

  if (!foundUser) {
    throw new ApiError(500, "User doesn't exist");
  }

  userService.comparePassword(password, foundUser.password);
  const access_token = await generateAccessToken(foundUser);

  setAccessCookie(res, access_token);

  const UserData = {
    id: foundUser._id,
    role: foundUser.role,
    email: foundUser.email,
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
  };

  return {
    UserData,
    access_token,
  };
};

const logout = (res) => {
  clearCookies(res);
};

const verifyAccessToken = (access_token) => {
  const tokenData = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
  if (tokenData) {
    const user = {
      id: tokenData.id,
      email: tokenData.email,
      role: tokenData.role,
    };
    return user;
  } else {
    throw new ApiError(401, "Invalid Token, Please login again");
  }
};

module.exports = {
  attemptLogin,
  logout,
  verifyAccessToken,
};
