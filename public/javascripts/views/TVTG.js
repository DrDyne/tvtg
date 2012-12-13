var tvtg = { views  : {}
           , models : {}
           }
  ;
$(function () {
  // initialize the Console
  tvtg.models.console = new TVTG.Models.Console();
  tvtg.views.console  = new TVTG.Views.Console( { el    : $('#header-console')
                                           , model : tvtg.models.console
                                           }
                                         );

  tvtg.views.console.render();
});
