var articleCounter = 1;

ArticleProvider = function(){};
ArticleProvider.prototype.dummyData = [];

ArticleProvider.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

ArticleProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

ArticleProvider.prototype.save = function(articles, callback) {
  var article = null;

  if( typeof(articles.length)=="undefined")
    articles = [articles];

  for( var i =0;i< articles.length;i++ ) {
    article = articles[i];
    article._id = articleCounter++;
    article.created_at = new Date();

    if( article.comments === undefined )
      article.comments = [];

    for(var j =0;j< article.comments.length; j++) {
      article.comments[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= article;
  }
  callback(null, articles);
};

/* Lets bootstrap with dummy data */
new ArticleProvider().save([
      {id: 1, title: 'Post one', caption: 'Body one', image: '', age: 0, author: 'dyne', ago:function() {}},
      {id: 2, title: 'Post two', caption: 'Body two', author: 'dyne', ago:function() {}},
      {id: 3, title: 'Post three', body: 'Body three', author: 'dyne', ago:function() {}}
    ], function(error, articles){});

exports.ArticleProvider = ArticleProvider;
