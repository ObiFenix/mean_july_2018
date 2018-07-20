var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response){
    response.render('index');
})

app.post("/users", function (request, response){
    var data = {
        full_name:request.body.full_name,
        location:request.body.location,
        language:request.body.lang,
        comment:request.body.comment,
    }
    response.render('results',{data:data});
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
