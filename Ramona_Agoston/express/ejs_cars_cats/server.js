var express = require("express");
var app = express();

app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cars/new", function (request, response){
    response.render('form');
})
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});
