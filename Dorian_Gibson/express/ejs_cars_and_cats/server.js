// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views/');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// this is the line that tells our server to use the "/static" folder for static content
app.get("/cars", function (request, response){

  var files_name = [
    {name:'ae86.jpg'},
    {name:'porsche.jpg'},
    {name:'rsti.jpg'},
    {name:'rx7.jpg'},
    // JOSH: I'm going to add some stuff here
    {name:'isdvhdihvldnvdln/lnc'}
    {name:'ummmmmmhmmmmmmm'}
  ]

  response.render('cars', {files: files_name});
})
app.get("/cats", function (request, response){

  var files_name = [
    {name:'space_cat.jpg'},
    {name:'high_cat.jpg'},
    {name:'space_cat2.jpg'},
    {name:'fire_cat.jpg'},
    {name:'space_cat3.jpg'},
    {name:'fire_cat7.jpg'}
  ]

  response.render('cats', {files: files_name});
})
app.get("/cars/new", function (request, response){
  response.render('form');
})
// JOSH: I'm going to add some stuff here
console.log('I just added this console log');

app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
