# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# Technology:

*Javascript
*Node.JS
*Axios
*Dotenv
*Moment
*Node Spotify API

# Getting Started
Once you download the program you will need to run the following command to install the required node packages:

$ npm install

You will also need to get a Spotify ID and Secret from https://developer.spotify.com/my-applications/#!/

Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Available commands: 
$ node liri.js movie-this 
$ node liri.js concert-this
$ node liri.js spotify-this-song

https://github.com/DSM12/liri-node-app