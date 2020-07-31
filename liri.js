require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var moment = require('moment');

var Spotify = require('node-spotify-api');

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

// User input
var userInput = process.argv[2];

var userCommand = process.argv.splice(3).join();

// Statements for user input
if (userInput === "movie-this") {
    movieThis(userCommand);
}

else if (input === "concert-this") {
    concertThis(userCommand);
}

else if (input === "spotify-this-song") {
    spotifyTrack(userCommand);
}
else if (input === "do-what-it-says") {
    doWhatItSays(userCommand);
}
else {
    console.log("Please choose exisiting command");
}
// App Logic
function moveThis(movie) {
    var movieQuery = movie || "Mr. Nobody"

    var queryURL = "http://www.omdbapi.com/?i=t" + movieQuery + "&y=&plot=short&apikey=397827f2";

    axios.get(queryURL).then(
        function(response) {

        }
    )
}