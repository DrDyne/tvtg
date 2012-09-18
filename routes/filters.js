var sugar = require('sugar');

exports.isAdmin = function isAdmin (req, res, next) {
  req.admin = true;
  next();
};
