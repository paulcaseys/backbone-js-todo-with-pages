
/**
 * Filename: js/app/AppConfig
 *
 * defines the app paths and initialises the app
 * 
 */
// 

// defines the app structure
var App = {};
App.Views = {};
App.Models = {};

// IE fix for console logs
if (!window.console) console = {log: function() {}};



requirejs.config({

	// defines paths that are used across the app
	paths: {

		// paths to common libraries
		'jquery': 		'assets/js/libs/jquery/jquery-min',
		'backbone': 	'assets/js/libs/backbone/backbone-min',
		'underscore': 	'assets/js/libs/underscore/underscore-min',
		'localstorage': 'assets/js/libs/localstorage/backbone-localstorage',


		// paths to app initialiser
		'AppInit': 								'assets/js/app/AppInit',

		// paths to app router
		'App.Router': 						'assets/js/app/router',

		// paths to common views
		'App.Views.HomePageView': 			'assets/js/app/views/HomePageView',
		'App.Views.TodoPageView': 			'assets/js/app/views/TodoPageView',
		'App.Views.HelpPageView': 			'assets/js/app/views/HelpPageView',
		'App.Views.ExamplePageView': 		'assets/js/app/views/ExamplePageView',

		// paths to common collections
		'App.Collections.TodosCollection': 	'assets/js/app/collections/TodosCollection',

		// paths to common models
		'App.Models.StateModel': 			'assets/js/app/models/StateModel',
		'App.Models.TodoModel': 			'assets/js/app/models/TodoModel'

	},

	// dependancies for certain javascript files
	shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    'localstorage': { 
    	deps: ['backbone'] 
    }
  },
	

	// the duration that require js should wait before abandoning the load 
	waitSeconds: 30,

	// prevents caching during development
	urlArgs: 'ver=5' + ((new Date()).getTime())

});





requirejs([

	// Load our app module and pass it to our definition function
	'AppInit'

	
], function(AppInit){
	// dependencies are now loaded
	
	// initialises app
	AppInit.initialize();


});