var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var flash = require('express-flash');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1);
app.use(session({
    secret: 'kitten',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/hello');
mongoose.Promise = global.Promise;

bcrypt.hash('pw', 10)
.then(hashed_password => {
})
.catch(error => {	 
});

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
