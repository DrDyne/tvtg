
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , http   = require('http')
  , path   = require('path')
  , stylus = require('stylus')
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
});

app.configure('development', function(){
  app.use(express.errorHandler({dumpExceptions:true, showStack:true}));
});

app.get('/', routes.index);
app.get('/posts/:id', routes.post);
app.post('/', routes.insertPost);
app.delete('/posts/:id', routes.deletePost);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
