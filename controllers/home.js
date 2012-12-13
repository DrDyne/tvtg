var sugar   = require('sugar')
  , Article = require('../models/Article').ArticleProvider
  ;
// GET home page.
exports.index = function(req, res){
//  var articles = new Article().findAll(function (err, articles) {
//    articles[0].ago = function () { return 'today' };
//    res.render('index', { caption: '', admin: req.admin, articles : articles });
//  });
  console.log(req.isAdmin);
  res.render('index', { caption: '', admin: req.isAdmin, articles : []});
};
