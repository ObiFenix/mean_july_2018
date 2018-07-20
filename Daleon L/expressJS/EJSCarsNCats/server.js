var express = require("express");
var app = express();
var path = require('path');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static/"));

app.get('/', function(request, response) {
    response.render('index.html');
});

app.get("/cars", function(request, response) {
    response.render('cars');
});
app.get("/cats", function(request, response) {
    response.render('cats');
});
app.get("/form", function(request, response) {
    response.render('form');
});

app.listen(7500, function() {
    console.log("Congrats \nYou are now listening \ninto port 7500");
});

//One of the prices of giving people free of choice, is that, sometimes, they would make the wrong choice.