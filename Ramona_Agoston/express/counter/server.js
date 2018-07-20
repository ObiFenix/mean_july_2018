var express = require("express");
var app = express();
var session = require('express-session');

app.use(session({
  secret: 'noneya',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get("/", function (req, res){
    if (session['counter'] == null){
        session['counter']=1;
    }else{
        session['counter']+=1;
    }
    res.render('index',{counter:session['counter']});
})

app.post("/increment", function (req, res){
    session['counter']+=1
    res.redirect('/');
})

app.post("/reset", function (req, res){
    session['counter']=0;
    res.redirect('/');
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
