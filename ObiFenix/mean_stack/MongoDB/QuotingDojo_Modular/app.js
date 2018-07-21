const express = require('express'),
   app = express(),
   path = require('path'),
   body_parser = require('body-parser'),
   mongoose = require('mongoose'),
   config = require('./Server/config/mongoose/quotes_db');
   quoteRoutes = require('./Server/config/routes/quotes');
   

// =====================
// Connection to mongoDB
// =====================
mongoose.connect(config.database);
mongoose.connection.on('connected', () => { console.log(`| => Connected to Database: ${config.database}`); });    // On Connection
mongoose.connection.on('error', (err) => { console.log(`| => Database error: ${err}`); });                        // On Connection ERROR


// Required Middleware
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./Client/static")));
app.set('views', path.join(__dirname, './Client/views'));
app.set('view engine', 'ejs');
// app.use('/quotes', quoteRoutes);


// ========================
// Endpoint Routes Handlers
// ========================
require('./Server/config/routes/quotes.js')(app);


// Clients connection port settings
var PORT = process.env.PORT || 8000;  // holds the arbitrary port for serveer
app.listen(PORT, () => {              // Clients connection port settings
    console.log(`\n====================[ REPORT ]\n| => Connection Status: Server started and is running on localhost at port ${PORT}` ); 
});