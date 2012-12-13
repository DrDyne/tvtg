TVTG.Models.Console = Backbone.Model.extend(
{ initialize : function () {
    console.log('console is initialized');
  }

, defaults : {
    value    : ''
  , userName : 'guest'
  , server   : 'tvtg'
  , placeholder : "T'es vraiment trop geek quand..."
  }

, promptLabel : function () {
    return [ this.get('userName')
           , '@'
           , this.get('server')
           ].join('')
   }

, clear : function () { this.set({value:''}); }

, run : function (cmd) {
    console.log(cmd || 'blah');
  }

, sync : function () {
  }
});
