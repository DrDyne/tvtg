
/**
 * Module dependencies.
 */

var express = require('express')
  , http   = require('http')
  , path   = require('path')
  , stylus = require('stylus')
  , controllers = require('./controllers')
  , filters     = require('./filters')
  , app = express()
  ;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(stylus.middleware( { src  : __dirname + '/views'
                             , dest : __dirname + '/public'
                             , debug: true
                             , force: true
                             , firebug : true
                             }
                           )
         );
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret:'tvtg'}));
  //  // Session options
  //  key cookie name defaulting to connect.sid
  //  store Session store instance
  //  fingerprint Custom fingerprint generating function
  //  cookie Session cookie settings, defaulting to { path: '/', httpOnly: true, maxAge: 14400000 }
  //  secret Secret string used to compute hash
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
  //app.use(filters.isAdmin);
});

app.get('/', controllers.Home.index);

app.get('/posts/:id', controllers.ArticleController.post);
app.post('/', controllers.ArticleController.insertPost);
app.delete('/posts/:id', controllers.ArticleController.deletePost);

app.configure('development', function(){
  app.use(express.errorHandler({dumpExceptions:true, showStack:true}));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
