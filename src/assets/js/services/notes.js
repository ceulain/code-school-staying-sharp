angular.module('NoteWrangler')
    .factory('Note', ['$resource', function NoteFactory($resource){
	return $resource("/notes", {}, {});
    }]);
