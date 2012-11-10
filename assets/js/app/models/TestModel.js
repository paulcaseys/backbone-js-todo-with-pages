
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
  'backbone',

  // required collections
  'App.Collections.TodosCollection'


// require js: defines the 
], function($, _, Backbone, TodosCollection){

    // Todo Model
    // ----------
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    var TestModel = Backbone.Model.extend({

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

    });
     





    // require js: defines function/s to be accessed by require js
    return new TestModel;

});