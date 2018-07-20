var express = require("express");
var app = express();
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if (request.session.counter){
        request.session.counter += 1;
    }
    else{
        request.session.counter = 1;
    }
    console.log(request.session.counter);
    response.render('counter', {session:request.session});
})

app.get('/plus', function(request, response) {
    if (request.session.counter){
        request.session.counter += 1;
    }
    else{
        request.session.counter = 1;
    }
    console.log(request.session.counter);
    response.redirect('/');
})

app.get('/reset', function(request, response) {
    request.session.counter = 0;
    console.log(request.session.counter);
    response.redirect('/');
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})
