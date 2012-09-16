var sugar = require('sugar');
var articleProvider = require('../mockArticles').ArticleProvider;

function isAdmin () {
  return true;
};
/*
 * GET home page.
 */

exports.index = function(req, res){
  var articles = new ArticleProvider().findAll(function (err, articles) {
    articles[0].ago = function () { return 'today' };
    res.render('index', { caption: '', articles : articles });
  });
};

exports.post = function(req, res) {
  // should fetch data from DB instead of this ugly mock
  var article = {id:0, title : 'meh post !', caption: 'miffy le lapin', age: 0, author:'dyne', ago:function(){}};
  // should also set a real value to admin
  res.render('index', { caption: '', admin : isAdmin(), articles : [article] });
};

exports.insertPost = function(req, res) {
  ['caption', 'image', 'title', 'password'].each(function (prop) {
    console.log(req.param(prop) || prop + ' was empty');
  });
  res.render('index', { caption: req.param('caption'), admin : isAdmin(), articles: [] });
};

exports.deletePost = function(req, res) {
  res.render('index', { caption: '', articles: []});
  res.redirect('/');
}