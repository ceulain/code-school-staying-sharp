angular.module('NoteWrangler')
    .controller('NotesIndexController', ['$http','Note', 'Tweetable', function(Note, $scope, Tweetable) {
	$scope.tweetThatNote = function(note){
	    Tweetable(note).success(function(data){
		console.log(data);
	    });
	};
	
	$scope.notes = Note.query();

    }]);
