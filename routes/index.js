var sugar = require('sugar');
var articleProvider = require('../mockArticles').ArticleProvider;

/*
 * GET home page.
 */

exports.index = function(req, res){
  var articles = new ArticleProvider().findAll(function (err, articles) {
    res.render('index', { caption: '', articles : articles });
  });
};

exports.post = function(req, res ) {
  // should fetch data from DB instead of this ugly mock
  var article = {id:0, title : 'meh post !', caption: 'miffy le lapin', age: 0};
  // should also set a real value to admin
  res.render('post', { caption: '', admin : true, article : article });
};

exports.insertPost = function(req, res) {
  ['caption', 'image', 'title', 'password'].each(function (prop) {
    console.log(req.param(prop) || prop + ' was empty');
  });
  res.render('index', { caption: req.param('caption'), articles: [] });
};

exports.deletePost = function(req, res) {
  res.render('index', { caption: '', articles: []});
  res.redirect('/');
}