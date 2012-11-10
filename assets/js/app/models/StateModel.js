
/**
 * Filename: js/app/views/ExamplePageView
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
  'backbone'


// require js: defines the 
], function($, _, Backbone){

    // Todo Model
    // ----------
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    var StateModel = Backbone.Model.extend({

      /*
      // Default attributes for the todo item.
      defaults: function() {
        return {
          title: "empty todo...",
          order: TodosCollection.nextOrder(),
          done: false
        };
      },

      // Ensure that each todo created has `title`.
      initialize: function() {
        if (!this.get("title")) {
          this.set({"title": this.defaults().title});
        }
      },

      // Toggle the `done` state of this todo item.
      toggle: function() {
        this.save({done: !this.get("done")});
      }
       */
      
      showView: function(view){
        
        if(this.currentView != undefined){
            this.currentView.transitionOut();
        }
        this.currentView = view;
        this.currentView.transitionIn();
        
      }
      
    });
     





    // require js: defines function/s to be accessed by require js
    return StateModel;

});