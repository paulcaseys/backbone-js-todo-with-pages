
/**
 * Filename: js/app/views/TodoPageView
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
  'App.Models.TodoModel',

  // required collections
  'App.Collections.TodosCollection'

  

// require js: defines the 
], function($, _, Backbone, TodoModel, TodosCollection){

  // Create our global collection of **Todos**.
  // 
  //App.Collections.Todos = new App.Collections.TodosCollection;
  var Todos = TodosCollection;
  
  // The Application
  // ---------------

  // Our overall **TodoPageView** is the top-level piece of UI.
  var TodoPageView = Backbone.View.extend({
    
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#todo-page"),
    
    obj: _.extend({}, Backbone.Events),

    // Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template($('#stats-template').html()),

    render: function(){
      


    },

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #new-todo":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function() {
      
      // hides the element until App.Models.StateModel.showView(WheteverView) calls the transitionIn() function
      $(this.el).hide(); 
      
      this.input = this.$("#new-todo");
      this.allCheckbox = this.$("#toggle-all")[0];
      
      Todos.on('add', this.addOne, this);
      Todos.on('reset', this.addAll, this);
      Todos.on('all', this.render, this);

      this.on('testCall', this.testMethod, this);

      this.footer = this.$('footer');
      this.main = $('#main');

      Todos.fetch();


    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Todos.done().length;
      var remaining = Todos.remaining().length;

      if (Todos.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }

      this.allCheckbox.checked = !remaining;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(todo) {
      var view = new TodoItemView({model: todo});
      this.$("#todo-list").append(view.render().el);

    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      Todos.each(this.addOne);
    },
     
    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Todos.create({title: this.input.val(), done:false});//
      this.input.val('');
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      _.invoke(Todos.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Todos.each(function (todo) { todo.save({'done': done}); });
    },

    
    testMethod: function () {
       console.log('TodoPageView testMethod');
    },






    /*******************
     * TRANSITION IN/OUT
     * these are called when the view is routed in / out
     */
    
      // transitions the view in
      transitionIn: function () {  
        // adds eventlisteners     
        this.addEventListeners(); 

        // basic way to display element
        $(this.el).show();    
      },

      // removes all eventlisteners
      transitionOut: function () {         
        // removes eventlisteners    
        this.removeEventListeners();  

        // basic way to hide element
        $(this.el).hide();    
      },      



    /*******************
     * EVENT LISTENERS
     * garbage disposal for unneccesary event listeners
     */
    
      // adds eventlisteners
      addEventListeners: function () { 
        // creates an example event listener
        this.on('testCall', this.testMethod, this);

      },

      // removes eventlisteners
      removeEventListeners: function () {        
        // removes all event listeners
        this.off('testCall', this.testMethod, this);
      }
      
     

  });


  // Todo Item View
  // --------------

  // The DOM element for a todo item...
  var TodoItemView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },

    // The TodoItemView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoItemView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    // Toggle the `"done"` state of the model.
    toggleDone: function() {
      this.model.save({done: !this.model.get("done")});
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      this.$el.addClass("editing");
      this.input.focus();
      //App.Views.ExamplePage.trigger("testCall");
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function() {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass("editing");
      }
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }

  });


  




    // require js: defines function/s to be accessed by require js
    return TodoPageView;

});
