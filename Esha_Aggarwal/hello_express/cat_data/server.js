// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/static/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// use app's get method and pass it the base route '/' and a callback
app.get('/cats', function(request, response) {
    response.render('home');
})
app.get('/cat/detail', function(request, response) {
    var cats_array = [
        {name: 'George', food: 'pizza', age: 78, spots: 'couch'},
        {name: 'Meowers', food: 'pasta', age: 48, spots: 'outside'}
    ]
    response.render('details', {cats: cats_array});
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})