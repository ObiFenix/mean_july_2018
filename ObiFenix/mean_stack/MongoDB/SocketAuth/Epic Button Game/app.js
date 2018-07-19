// Required Modules
var express = require("express"),
   app = express();
   path = require('path'),
   // io = require('socket.io'),
   bodyParser = require('body-parser'),
   session = require('express-session'),
   expressLayouts = require('express-ejs-layouts');

// Required Middlewares...
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

// Set the static and views directory as wll as the view engine
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
   secret: "dragonballz|ultrainstring|?",
   proxy: true,
   resave: false,
   saveUninitialized: true
}));

// Handles Endpoint Route "/"
app.get('/', (req, res) => {
   res.render('Index');
});

// Clients connection port settings
var port = process.env.PORT || 8000;                              //holds the arbitrary port for serveer
var server = app.listen(port, () => {
    console.log(`Running in localhost at port ${port}`);
});

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
