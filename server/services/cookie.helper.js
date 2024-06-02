const cookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: process.env.NODE_ENV === "production",
  maxAge: 5 * 24 * 60 * 60 * 1000,
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
};
const setAccessCookie = (res, access_token) => {

  res.cookie("access_token", access_token, cookieOptions);
};

const clearCookies = (res) => {
  const cookieOption = {
    ...cookieOptions,
    maxAge: 0,
    expires: new Date(Date.now()),
  };
  res.cookie("access_token", "", cookieOption);
  res.locals.user = null;
};

module.exports = { setAccessCookie, clearCookies };
