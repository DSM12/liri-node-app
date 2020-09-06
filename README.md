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

# Examples of Functionality
![spotify-this-song](https://user-images.githubusercontent.com/62487890/92321425-d9e75b00-eff7-11ea-9dd3-caf87ae353e7.png)
![movie-this](https://user-images.githubusercontent.com/62487890/92321451-09966300-eff8-11ea-8bce-0ca755103dce.png)
![concert-this](https://user-images.githubusercontent.com/62487890/92321457-14e98e80-eff8-11ea-8c78-6bea27e46b4c.png)



https://github.com/DSM12/liri-node-app
