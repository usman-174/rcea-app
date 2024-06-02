const catchAsync = require("../utils/catchAsync");
const { authService } = require("../services");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authController = {
  /**
   *
   * @param {email} valid email
   * @param {role} valid email
   * @param {password} must be at least 6 characters long
   * @returns {user, access_token, refresh_token}
   */

  login: catchAsync(async (req, res) => {
    var { password, email } = req.body;
    try {
      if (!password || !email) {
        return res.status(400).json({ error: "Please fill all fields" });
      }

      const loginData = await authService.attemptLogin(res, email, password);

      if (!loginData) {
        return res.status(500).json({ error: "User already exists" });
      }
      return res.status(200).json({ ...loginData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }),

  /**
   *
   * @param {password, email, role,  firstname, lastname}
   * @returns {message}
   */

  register: catchAsync(async (req, res) => {
    var { password, email, role, firstname, lastname } = req.body;

    try {
      if (!password || !email || !role || !firstname || !lastname) {
        return res.status(400).json({ error: "Please fill all fields" });
      }
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(500).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        role: role,
        email: email,
        firstName: firstname,
        lastName: lastname,
        password: hashedPassword,
      });

      res.status(200).json({
        user: {
          ...newUser._doc,
          password: undefined,
          createdAt: undefined,
          updatedAt: undefined,
        },
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),

  /**
   *
   * @param {access_token}
   * @returns {message}
   */

  logout: catchAsync(async (req, res) => {
     authService.logout(res);
    return res.status(200).json({ message: "Logged out successfully" });
  }),
  me: catchAsync(async (req, res) => {
    const { user } = res.locals;
    try {
      const found = await User.findById(user.id).select("-password");
      if (!found) throw new ApiError(401, "UnAuthorized, Please login again");
      return res.status(200).json({ user: found });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }),
};

module.exports = authController;
