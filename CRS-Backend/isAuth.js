const isAuth = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res.json({ loggedIn: false });
  }
};

export default isAuth;
