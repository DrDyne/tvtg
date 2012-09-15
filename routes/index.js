var articleProvider = require('../mockArticles').ArticleProvider;
/*
 * GET home page.
 */

exports.index = function(req, res){
  var articles = new ArticleProvider().findAll(function (err, articles) {
    res.render('index', { title: 'Express', articles : articles });
  });
};

exports.post = function(req, res ) {
  // should fetch data from DB
  var post = {title : 'meh post !', caption: 'miffy le lapin', age: 0};
  res.render('post', { data : post });
};