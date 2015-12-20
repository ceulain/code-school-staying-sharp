angular.module('NoteWrangler')
    .factory('Tweetable', ['$http', function TweetableFactory($http){
	return function(potentialTweet){
	    return $http({
		method: 'POST',
		url: 'ttp://gentle-spire-1153.herokuapp.com/tweet',
		data : { description : potentialTweet }
	    });
	};
    }]);