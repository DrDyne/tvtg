
exports.isAdmin = function isAdmin (req, res, next) {
  req.isAdmin = true;
  next();
};
