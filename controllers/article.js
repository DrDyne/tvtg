var sugar = require('sugar');

exports.post = function(req, res) {
  // should fetch data from DB instead of this ugly mock
  var article = {id:0, title : 'meh post !', caption: 'miffy le lapin', age: 0, author:'dyne', ago:function(){}};
  // should also set a real value to admin
  res.render('index', { caption: '', articles : [article] });
};

exports.insertPost = function(req, res) {
  ['caption', 'image', 'title', 'password'].each(function (prop) {
    console.log(req.param(prop) || prop + ' was empty');
  });
  res.render('index', { caption: req.param('caption'), admin: req.admin, articles: [] });
};

exports.deletePost = function(req, res) {
  res.render('index', { caption: '', articles: []});
  res.redirect('/');
}
