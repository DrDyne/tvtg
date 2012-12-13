TVTG.Views.Console = Backbone.View.extend(
{ id : 'header-console'

, events : { 'click .prompt' : 'clickPrompt'
           , 'focus #caption': 'clear'
           , 'keypress #caption' : 'caption_keypress'
           }

, initialize : function (options) {
    this.model.on('change:value', this._updateValue.bind(this));
  }

, _updateValue : function (model, value) {
    this.$('#caption').val(value);
  }

, clickPrompt : function () {
    console.log('clicked on the prompt');
  }

, clear : function () {
    this.$('#caption').val('');
    this.model.clear();
  }

, caption_keypress : function () {
    this.$('.header-toggle').fadeIn();
  }

, render : function () {
    console.log('rendering console!');
    this.$('.prompt').text(this.model.promptLabel());
    this.$('#caption').text(this.model.get('placeHolder'));
    return this;
  }
});
