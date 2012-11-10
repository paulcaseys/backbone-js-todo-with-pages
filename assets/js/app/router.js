
/**
 * Filename: js/app/AppInit
 *
 * initialises the views
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',

  // required views
  //'App.Views.TodoPageView',
  //'App.Views.ExamplePageView'



// require js: defines the 
], function($, _, Backbone){

    var AppRouter = Backbone.Router.extend({
        routes: {
            "todo/": "getTodo",
            "help/:id": "getHelp",
            "example/": "getExample",
            "*actions": "defaultRoute" // Backbone will try match the route above first
        },


        // Instantiate the router
        //App.Router = new AppRouter;

        defaultRoute: function(){
            console.log('route: home');
            App.Models.StateModel.showView(App.Views.HomePageView);
        },
        getTodo: function(){
            console.log('route: todo');
            App.Models.StateModel.showView(App.Views.TodoPageView);
        },
        getHelp: function(id){
            console.log('route: help '+ id );
            App.Models.StateModel.showView(App.Views.HelpPageView);
        },
        getExample: function(){
            console.log('route: example');
            App.Models.StateModel.showView(App.Views.ExamplePageView);
        }


    });



  
    


    var initialize = function(){

        // Instantiate the router
        var app_router = new AppRouter;

        // Start Backbone history a necessary step for bookmarkable URL's
        Backbone.history.start();
    };

    // require js: defines function/s to be accessed by require js
    return {
      initialize: initialize
    };


});