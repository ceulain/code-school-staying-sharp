angular.module('NoteWrangler')
    .provider('Tweetable', [function TweetableFactory(){
	var characterLength = 144;
	
	this.setLength = function(character){
	    characterLength = character;
	};

	this.$get = function($http){
	    return function(potentialTweet){
		return $http({
		    method: 'POST',
		    url: 'ttp://gentle-spire-1153.herokuapp.com/tweet',
		    data : { 
			description: potentialTweet,
			maxLength: characterLength
		    }
		});
	    };

	};
    }]);
