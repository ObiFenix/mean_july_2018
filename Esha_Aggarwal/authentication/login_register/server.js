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
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

require('mongoose-type-email');
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

bcrypt.hash('pw', 10)
.then(hashed_password => {
})
.catch(error => {	 
});


var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    email: {type: mongoose.SchemaTypes.Email, required: true},
    pw: {type: String, required: true, minlength: 8},
    pw_confirm: {type: String, required: true, minlength: 8},
   },
   {timestamps:true}
);
   mongoose.model('User', UserSchema); 
   var User = mongoose.model('User');


app.get('/', function(req, res) {
    res.render('index');
});

app.post('/users', function(req, res) {
    req.session = req.info;
    var user = new User({first_name: req.info.first_name, last_name: req.info.last_name, email: req.info.email});
    user.save(function(err) {
      if(err) {
        console.log('something went wrong', err);
      } 
      else { 
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })

app.listen(8000, function() {
    console.log("listening on port 8000");
})
