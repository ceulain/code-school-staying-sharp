angular.module('NoteWrangler')
.controller('NotesIndexController', ['$http','Note', function(Note, $scope) {
 
  Note.all().success(function(data) {
    $scope.notes = data;
  });
}]);
