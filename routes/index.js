var articleProvider = require('../mockArticles').ArticleProvider;
/*
 * GET home page.
 */

exports.index = function(req, res){
  var articles = new ArticleProvider().findAll(function (err, articles) {
    res.render('index', { title: 'Express', articles : articles });
  });
};