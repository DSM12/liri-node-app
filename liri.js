require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var moment = require("moment");

var Spotify = require("node-spotify-api");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

// User input
var userInput = process.argv[2];

var userCommand = process.argv.splice(3).join(" ");

// Statements for user input
if (userInput === "movie-this") {
    movieThis(userCommand);
}

else if (userInput === "concert-this") {
    concertThis(userCommand);
}

else if (userInput === "spotify-this-song") {
    spotifyTrack(userCommand);
}
else if (userInput === "do-what-it-says") {
    doWhatItSays(userCommand);
}
// else {
//     console.log("Please choose exisiting command");
// }

// App Logic
function movieThis(movie) {
    var movieQuery = movie || "Mr. Nobody"

    var queryURL = "http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&apikey=trilogy";
    console.log("========================================================================");
    axios.get(queryURL).then(
        function (response) {
            // console.log(response.data);
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
            console.log("========================================================================");
        }

    )

}

function concertThis(concert) {
    var concertQuery = concert || "'The Sign' by Ace of Base"

    var queryURL = "https://rest.bandsintown.com/artists/" + concertQuery + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(
        function (response) {
            console.log(response.data);
            // console.log(response.data);

        }
    )
}

function spotifyTrack(track) {
    var songName = track || "What's My Age Again"
    spotify
        .search({ type: "track", query: songName })
        .then(function (response) {
            // for (var i = 0; i < response.tracks.items.length; i++) {
            //     console.log("Artist: " + JSON.stringify(response.tracks.items[i]));
            //     console.log("Artist: ")
            //     // console.log("Song: " + response.tracks.items[i].name);
            //     // console.log("Album: " + response.tracks.items[i].album.name);
            // }
            // console.log(response.tracks.items[0]);
            // console.log(songName);
            console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            // console.log("Preview: " + response.tracks.items[0].preview_uri);
        })
        .catch(function (err) {
            console.log(err);
        });

}

