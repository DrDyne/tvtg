TVTG.Models.Post = Backbone.Model.extend(
{ initialize : function () {
    console.log('post is initialized');
  }

, defaults : { title   : ''
             , image   : ''
             , author  : ''
             , caption : ''
             , age     : 0
             , stat    : { likes: 0, dislikes: 0 }
             }

, ago : function () { return this.get('age') === 0 ? 'today' : this.get('age') + ' days ago' }

, sync : function () {
  }
});
