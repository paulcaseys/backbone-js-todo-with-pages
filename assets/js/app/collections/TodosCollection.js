
/**
 * Filename: js/app/collections/TodoCollections
 *
 * collection of todo models
 * 
 */
// 


// require js: defines the required js libraries and app files
define([

  // required libraries
  'jquery',
  'underscore',
  'backbone',
  'localstorage',

  // required collections
  //'App.Collections.TodosCollection'

  // required models  
  'App.Models.TodoModel'

  // required views
  //'App.Views.ExamplePageView'



// require js: defines the 
], function($, _, Backbone, LocalStorage, TodoModel){

  // Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.
  var TodosCollection = Backbone.Collection.extend({

    
    // Reference to this collection's model.
    //model: TodoModel,
    inititlaize: function () { 
      this.model = TodoModel;
    },

    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Store("todos-backbone"),

    // Filter down the list of all todo items that are finished.
    done: function() {
      return this.filter(function(todo){ return todo.get('done'); });
    },

    // Filter down the list to only todo items that are still not finished.
    remaining: function() {
      return this.without.apply(this, this.done());
    },

    // We keep the Todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function(todo) {
      return todo.get('order');
    }
     
 
  });






    // require js: defines function/s to be accessed by require js
    return new TodosCollection;

});