
angular.module('NoteWrangler', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
	$routeProvider
	    .when('/',{
    		redirectTo: '/users'
  	    })
	    .when('/notes', {
		templateUrl: '../../../templates/pages/notes/index.html',
		controller: 'NotesIndexController'
	    })
	    .when('/users', {
		templateUrl: '../../../templates/pages/users/index.html'
	    })
	    .when('/users/:id', {
		templateUrl: '../../../templates/pages/users/show.html',
		controller: 'UsersShowController'
	    })
  	    .when('/notes/new', {
    		templateUrl: '../../../templates/pages/notes/edit.html',
		controller: 'NotesCreateController',
		controllerAs: 'notesEditCtrl'
	    })
	    .when('/notes/:id', {
		templateUrl: '../../../templates/pages/notes/show.html',
		controller: 'NotesShowController'
	    })
	    .when('/notes/:id/edit', {
		templateUrl: '../../../templates/pages/notes/edit.html',
		controller: 'NotesEditController'
	    })
  	    .when('/tweeted', {
		templateUrl: '../../../templates/pages/notes/tweeted.html',
		controller: 'TweetedController'
	    })
  	    .otherwise({ redirectTo: '/notes'});

    }]);

