const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  let { access_token } = req.cookies ?? {};
  if (!access_token) {
    access_token = req.headers.authorization?.split(" ")[1];
  }
  if (!access_token) {
    return res.status(401).json({ error: "Unauthorized1" });
  }

  jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized2" });
    }

    const { id, email, role } = decoded;

    res.locals.user = {
      id,
      email,
      role,
    };

    next();
  });
};

const isAuthorized = (roles) => (_, res, next) => {
  const { role } = res.locals.user;

  // Check if the user has at least one of the required roles
  const hasRole = roles.some((requiredRole) => role.includes(requiredRole));

  if (!hasRole) {
    return res
      .status(403)
      .json({
        error: "Forbidden",
        msg: "For " + role + " , Action is Forbidden",
      });
  }

  next();
};

module.exports = { isAuthenticated, isAuthorized };
