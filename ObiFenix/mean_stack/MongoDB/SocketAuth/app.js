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

// route for user's dashboard - Success page
app.get('/success', (req, res) => {
   res.render('PushButtonLandPage', { req: req });
});

// Logs the user out and earase the user session... 
// I am still waiting for the next food to drop...
// other users applyig this approach have experienced some issues... so far so good!
app.get('/logout', (req, res) => {
   req.session.destroy( (err) => { 
      if (err) { console.log(err); }  
      else     { res.redirect('/loginform'); }  
   });
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
   res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
});

// Clients connection port settings
var port = process.env.PORT || 8000;                              //holds the arbitrary port for serveer
var server = app.listen(port, () => {
    console.log(`Running in localhost at port ${port}`);
});


// ====================================
// Required Socked IO Connectio Config.
// ====================================

var io = require('socket.io').listen(server);                     // invoke io socket connection
io.sockets.on('connection', (socket) => {
   console.log("\n=> Client/socket is connected!");
   console.log("=> Client/socket id is: ", socket.id);

   // Handling Incoming Socket Events for "UPDATING COUNT"
   socket.on('count', () => {
      if (session.count >= 1) { session.count++; }
      else                    { session.count = 1; }
      console.log("Current count: " + session.count);
      socket.emit('counted', session.count);
   });

   // Handling Incoming Socket Events for "COUNT RESET"
   socket.on('reset', () => {
      session.count = 0;
      console.log("Count resetted back to: " + session.count);
      socket.emit('reseted', session.count);
   });

   // DisconnectEvent
   socket.on('disconnect', () => { console.log(':> Client has disconnected'); });
});