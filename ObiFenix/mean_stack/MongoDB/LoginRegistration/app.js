// =======================
// Load the express module
// =======================

const express = require("express"),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      bcrypt = require('bcryptjs'),
      flash = require('express-flash'),
      User = require('./models/user');



// =============================
// Application-Level Middlewares
// =============================

// app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); //To help work with HTTP POST Requests.
app.use(express.static(__dirname + "/static"));
app.use(flash());
app.use(session({
   secret: 'thelows$of%Phy|cs?',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
})); //This is to set up sessions

// ========================
// Endpoint Routes Handlers
// ========================

app.get('/loginform', (req, res) => res.render('Login'));
app.get('/', (req, res) => { res.render('Register') });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json()); 
app.use(session({ 
	secret: "$5#thelows$of%Phy[cs?83dr@g@n%ball7Z",
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

app.post('/register', (req, res) => {

   let errors = [];

   if ((req.body.password == req.body.confirm_pwd) && (req.body.password.length > 7) && (req.body.confirm_pwd.length > 7)){
      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(req.body.password, salt, (err, hashed_pwd) => {

            const user = new User({
               first_name: req.body.first_name, 
               last_name:  req.body.last_name, 
               email:      req.body.email, 
               password:   hashed_pwd, 
               birthday:   req.body.birthday});

            user.save((err) => {
               if (err)  res.render('Register', { errors: user.errors });
               else {
                  req.session.uid = user._id;
                  req.session.username = user.first_name;
                  res.render('/success');	
               }
            });
         });
      });
   }
   else {
      errors.push({message: "Passwords must match and have at least 8 characters."});
      res.render('Register', {errors: errors});
   }
});

app.post('/login', (req, res) => {

   let errors = [];

   User.findOne({email: req.body.email}, (err, user) => {
      if (user) {

         bcrypt.compare(req.body.password, user.password).then((status) => {
            if (status == false)  res.render('Login', { errors: user.errors });
            else {
               req.session.uid = user._id;
               req.session.username = user.first_name;
               res.redirect('/success');
            }
         });
      }
      else {
         errors.push({ message: "Invalid login information." });
         res.render('Login', { errors: errors });
      }
   });
})


// route for user's dashboard
app.get('/success', (req, res) => {
   User.find({}, (err, data) => { res.render('Success', { req:req, allusers: data }); })
});
// app.get('/success', (req, res) => {
//    if (req.session.uid /*  && req.cookies.user_sid */) { res.render('Success'); }
//    else                                          { res.redirect('/loginform'); }
// });

// route for user logout
// app.get('/logout', (req, res) => {
//    if (req.session.uid /*  && req.cookies.user_sid */) { res.clearCookie('user_sid');  res.redirect('/'); } 
//    else                                          { res.redirect('/loginform'); }
// });

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
   res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
})

app.get('/logout', (req, res) => {
   req.session.uid = "";
   // req.session.flash;
	res.render('Register');
});

// Clients connection port settings
// const port = process.env.PORT || 3000;
// app.listen(port, () => `App running in localhost at port ${port}...`);
app.set('port', 8000);
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));

// ==================
// Required Functions 
// ==================
var sessionChecker = (req, res, next) => {       // middleware function to check for logged-in users
   if (req.session.user && req.cookies.user_sid) { res.redirect('/success'); }
   else                                          { next(); }
};