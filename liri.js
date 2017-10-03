var keys = require("./keys.js");
var fs = require("fs");

// console.log(keys);

// MAKE LIRI TAKE IN THESE COMMANDS
// my-tweets - This will show your last 20 tweets and when they were created at in your terminal/bash window.

// spotify-this-song
// -Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

// movie-this
// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Rotten Tomatoes Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

// /////////////////////// --------- SPOTIFY ---------/////////////////////////////////////////////////////////////////////////////////////////////////
var spotifyApi = require("node-spotify-api");
var spotKeys = keys.spotifyKeys;
var getSpotify = new spotifyApi(spotKeys);

// console.log(process.argv)
var input = process.argv[2];
var songOrMovie = process.argv[3];

function spotifyThis(input, songOrMovie) {

    if ((input === "spotify-this-song") && (!songOrMovie)) {
        getSpotify.search({
            type: 'track',
            query: "Ace of Base The Sign",
            limit: 1
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("")
            console.log("")
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name) // BAND NAME
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song Name: " + data.tracks.items[0].name) // SONG NAME
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song URL: " + data.tracks.items[0].external_urls.spotify) // SONG URL
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song Album: " + data.tracks.items[0].album.name) //SONG ALBUM
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("")
            console.log("")
            fs.appendFile("log.txt", "Artist(s): " + data.tracks.items[0].album.artists[0].name + "\n" +
                "Song Name: " + data.tracks.items[0].name + "\n" +
                "Song URL: " + data.tracks.items[0].external_urls.spotify + "\n" +
                "Song Album: " + data.tracks.items[0].album.name + "\n" + "\n",
                function(err) {
                    if (err) {
                        return console.log(err);
                    }
                })
        });
    } else if (input === "spotify-this-song") {
        getSpotify.search({
            type: 'track',
            query: songOrMovie,
            limit: 5
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("")
            console.log("")
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name) // BAND NAME
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song Name: " + data.tracks.items[0].name) // SONG NAME
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song URL: " + data.tracks.items[0].external_urls.spotify) // SONG URL
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("Song Album: " + data.tracks.items[0].album.name) //SONG ALBUM
            console.log("-----------------------------------------------------------------------------------------------------------------");
            console.log("")
            console.log("")
            fs.appendFile("log.txt", "Artist(s): " + data.tracks.items[0].album.artists[0].name + "\n" +
                "Song Name: " + data.tracks.items[0].name + "\n" +
                "Song URL: " + data.tracks.items[0].external_urls.spotify + "\n" +
                "Song Album: " + data.tracks.items[0].album.name + "\n" + "\n",
                function(err) {
                    if (err) {
                        return console.log(err);
                    }
                })
        });
    }
}
spotifyThis(input, songOrMovie);

////////////////////////////       ----------OMDb--------------     ////////////////////////////////////////////////////////////////////////////////////

var request = require("request");

if ((input === "movie-this") && (!songOrMovie)) {
    songOrMovie = "mr nobody";
    var queryUrl = "http://www.omdbapi.com/?t=" + songOrMovie + "&y=&plot=short&apikey=40e9cece";

    request(queryUrl, function(err, res, body) {
        if (err) {
            return console.log(err);
        }
        console.log("")
        console.log("")
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Movie name: " + JSON.parse(body).Title);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Release Date: " + JSON.parse(body).Year);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Country: " + JSON.parse(body).Country);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Language: " + JSON.parse(body).Language);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Movie Plot: " + JSON.parse(body).Plot);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("")
        console.log("")
        fs.appendFile("log.txt", "Movie name: " + JSON.parse(body).Title + "\n" +
            "Release Date: " + JSON.parse(body).Year + "\n" +
            "IMDb Rating: " + JSON.parse(body).imdbRating + "\n" +
            "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" +
            "Country: " + JSON.parse(body).Country + "\n" +
            "Language: " + JSON.parse(body).Language + "\n" +
            "Movie Plot: " + JSON.parse(body).Plot + "\n" +
            "Actors: " + JSON.parse(body).Actors + "\n" + "\n",
            function(err) {
                if (err) {
                    return console.log(err);
                }
            })
    })
} else if (input === "movie-this") {

    var queryUrl = "http://www.omdbapi.com/?t=" + songOrMovie + "&y=&plot=short&apikey=40e9cece";

    request(queryUrl, function(err, res, body) {
        if (err) {
            return console.log(err);
        }
        console.log("")
        console.log("")
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Movie name: " + JSON.parse(body).Title);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Release Date: " + JSON.parse(body).Year);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Country: " + JSON.parse(body).Country);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Language: " + JSON.parse(body).Language);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Movie Plot: " + JSON.parse(body).Plot);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("-----------------------------------------------------------------------------------------------------------------");
        console.log("")
        console.log("")
        fs.appendFile("log.txt", "Movie name: " + JSON.parse(body).Title + "\n" +
            "Release Date: " + JSON.parse(body).Year + "\n" +
            "IMDb Rating: " + JSON.parse(body).imdbRating + "\n" +
            "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" +
            "Country: " + JSON.parse(body).Country + "\n" +
            "Language: " + JSON.parse(body).Language + "\n" +
            "Movie Plot: " + JSON.parse(body).Plot + "\n" +
            "Actors: " + JSON.parse(body).Actors + "\n" + "\n",
            function(err) {
                if (err) {
                    return console.log(err);
                }
            })

    })
}
/////////////////////     ----------RANDOM.TXT---------     ////////////////////////////////////////////////////////////////////////////////////////////

if (input === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err)
        }
        data = data.split(",");
        // console.log(data);
        input = data[0];
        songOrMovie = data[1];
        spotifyThis(input, songOrMovie);
    })
}
///////////////////////     -----------TWITTER-------------    ////////////////////////////////////////////////////////////////////////////////////////////
var Twitter = require('twitter');
var twitKeys = keys.twitterKeys;
var getTwitter = new Twitter(twitKeys);

if (input === "my-tweets") {
    var params = {
        screen_name: 'kyyleeH',
        count: 20
    };
    var counter = 0;
    getTwitter.get('/statuses/user_timeline.json', params, function(error, tweets, response) {
        if (error) {
            return console.log(error);
        }
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                counter++;
                console.log("-----------------------------------------------------------------------------------------------------------------");
                console.log("Tweet " + counter + ": " + tweets[i].text);

                fs.appendFile("log.txt", "Tweet " + counter + ": " + tweets[i].text + "\n", function(err) {
                    if (err) {
                        return console.log(err);
                    }
                })
            }
            if (tweets[tweets.length - 1]) {
                fs.appendFile("log.txt", "" + "\n", function(err) {
                    if (err) {
                        return console.log(err);
                    }
                })
            }
        }
    });
}