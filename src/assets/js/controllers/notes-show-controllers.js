angular.module('NoteWrangler')
    .controller('NotesShowController', ['$routeParams','$http',function($routeParams,$http) {
	var controller = this;
	$http({method: 'GET', url: '/notes/:id' +$routeParams.id })
	    .success(function(data){
		controller.note = data;
	    });
    }]);
