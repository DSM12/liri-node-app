require("dotenv").config();
var keys = require("./keys");
var fs = require("fs");
var inquirer = require("inquirer");
var Spotify = require("node-spotify-api");
var axios = require("axios");






var spotify = new spotify(keys.spotify);