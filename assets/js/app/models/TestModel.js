
/**
 * Filename: js/app/models/TestModel
 *
 * dummy model
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

    });
     





    // require js: defines function/s to be accessed by require js
    return new TestModel;

});