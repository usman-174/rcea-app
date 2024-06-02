const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const generateAccessToken = (user) => {
  const access_token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: String(process.env.EXPIRY_TIME),
    }
  );

  return access_token;
};

const generateRefreshToken = (user) => {
  const token = uuidv4();

  return {
    user: user._id,
    email: user.email,
    role: user.role,
    token,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
  };
};

module.exports = { generateAccessToken, generateRefreshToken };