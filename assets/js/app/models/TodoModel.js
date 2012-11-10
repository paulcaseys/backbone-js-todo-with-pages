
/**
 * Filename: js/app/models/TodoModel
 *
 * model for the todo list
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
  'App.Collections.TodosCollection'//,

  // required models  
  //'App.Models.TodoModel'

// require js: defines the 
], function($, _, Backbone, TodosCollection){

    // Todo Model
    // ----------
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    var TodoModel = Backbone.Model.extend({

      
      // Default attributes for the todo item.
      defaults: function() {
        return {
          title: "empty todo...",
          order: 1,
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
        alert('d');
        this.save({done: !this.get("done")});
      }
       

    });
     





    // require js: defines function/s to be accessed by require js
    return new TodoModel;

});