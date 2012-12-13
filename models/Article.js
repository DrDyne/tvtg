var mongoose = require('mongoose')
  //, db = mongoose.createConnection('localhost', 'tvtg')
  , Schema = mongoose.Schema
  ;

var PostSchema = new Schema(
    { title    : { type: String, lowercase: true, match: /^[a-zA-Z0-9 ']+$/ }
    , image    : String
    , author   : { type: String, lowercase: true }
    , caption  : { type: String, lowercase: true, validate: [maxLength] }
    , age : { type: Number, default: function () { return Date.now();} }
    , stat: { likes: Number, dislikes: Number }
    })
  ;

function maxLength (value) {
  return value.length < 124
}
PostSchema.path('title').validate(maxLength, 'This title is way too long');

PostSchema.virtual('ago').get(function () {
  return 'ago() was called :' + new Date().toString() + ' days ago'; // numbers of days before today
});

console.log('schema defined');

var db = mongoose.createConnection('localhost', 'tvtg')
  , Post = db.model('Post', PostSchema)
  , post = new Post({title:'i!#$@^&mpressive#'});

post.save(function(err) { console.log(err) });
Post.find({}, function () { console.log(arguments) });
console.log(post.ago);

// //new ArticleProvider().save([
// //      {id: 1, title: 'Post one', caption: 'this is a loooooooooooooooong caption for the image', image: '', age: 0, author: 'dyne', ago:function() {}},
// //      {id: 2, title: 'Post two', caption: 'Body two', author: 'dyne', ago:function() {}},
// //      {id: 3, title: 'Post three', body: 'Body three', author: 'dyne', ago:function() {}}
// //    ], function(error, articles){});
// //
//var articleCounter = 1;
//
//ArticleProvider = function(){};
//ArticleProvider.prototype.dummyData = [];
//
//ArticleProvider.prototype.findAll = function(callback) {
//  callback( null, this.dummyData )
//};
//
//ArticleProvider.prototype.findById = function(id, callback) {
//  var result = null;
//  for(var i =0;i<this.dummyData.length;i++) {
//    if( this.dummyData[i]._id == id ) {
//      result = this.dummyData[i];
//      break;
//    }
//  }
//  callback(null, result);
//};
//
//ArticleProvider.prototype.save = function(articles, callback) {
//  var article = null;
//
//  if( typeof(articles.length)=="undefined")
//    articles = [articles];
//
//  for( var i =0;i< articles.length;i++ ) {
//    article = articles[i];
//    article._id = articleCounter++;
//    article.created_at = new Date();
//
//    if( article.comments === undefined )
//      article.comments = [];
//
//    for(var j =0;j< article.comments.length; j++) {
//      article.comments[j].created_at = new Date();
//    }
//    this.dummyData[this.dummyData.length]= article;
//  }
//  callback(null, articles);
//};
//
///* Lets bootstrap with dummy data */
//new ArticleProvider().save([
//      {id: 1, title: 'Post one', caption: 'this is a loooooooooooooooong caption for the image', image: '', age: 0, author: 'dyne', ago:function() {}},
//      {id: 2, title: 'Post two', caption: 'Body two', author: 'dyne', ago:function() {}},
//      {id: 3, title: 'Post three', body: 'Body three', author: 'dyne', ago:function() {}}
//    ], function(error, articles){});
//
//exports.ArticleProvider = ArticleProvider;
