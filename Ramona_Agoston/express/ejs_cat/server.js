var express = require("express");
var app = express();

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cat1", function (request, response){
    var cats_array = [
        {favfood: "bugs",
        age: 5,
        sleep: "outside",
        image:"cat1.jpg"},
    ];
    response.render('details',{cats: cats_array});
})

app.get("/cat2", function (request, response){
    var cats_array = [
        {favfood: "tofu",
        age: 2,
        sleep: "on any soft pillow",
        image:"cat2.jpg"},
    ];
    response.render('details',{cats: cats_array});
})

app.get("/cat3", function (request, response){
    var cats_array = [
        {favfood: "broccoli",
        age: 3,
        sleep: "sofa arm rest",
        image:"cat3.jpg"},
    ];
    response.render('details',{cats: cats_array});
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
