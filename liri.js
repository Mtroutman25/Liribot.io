var Twitter = require("./keys.js");

var Twit = require('twit');

var omdb = require('omdb'); 

var Tweet = new Twit(Twitter); 
var params = {
q: 'nodejs',
count: 20
}

T.get('search/tweets', params,searchedData); 
function searchedData(err, data, response) {
console.log(data);
}

omdb.search(" ", function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }

});

omdb.get({ title: " " }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating, movie.tomatoRating, movie.Country, movie.Language, movie.Plot, movie.Actors);
    console.log(movie.plot);

}

var arg = process.argv[2];
 switch (arg) {
     case "my-tweets":
     tweets();
     break;

    case "movie-this":
     admin();
     break;
 };
	

