var express = require("express");
var app = express();
var session = require('express-session');
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('survey', {session:request.session});
})

app.post('/result', function(request, response) {
    console.log(request.body);
    response.render('result', {form:request.body});
})


app.listen(6789, function() {
  console.log("listening on port 6789");
})
