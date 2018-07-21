

// =========================================
// Load All Required module and Dependencies
// =========================================
const express    = require("express"),
      bodyParser = require('body-parser'),
      path       = require('path'),
      cors       = require('cors'),
      passport   = require('passport'),
      mongoose   = require('mongoose'),
      config     = require('./Server/config/mongoose/users_db');


// =========================
// Required Global Variables
// =========================
const app        = express(),                                       // invokes the express module and store in app
      PORT       = process.env.PORT || 8000,                        // holds the arbitrary port for server
      userRoutes = require('./Server/config/routes/users'),
      UserModel  = require('./Server/models/user');
//   taskModel  = require('./Server/models/task'),
//   i955Model  = require('./Server/models/1955'),
//   i955Route  = require('./Server/config/router/1955'),
//   tasksRoute = require('./Server/config/router/tasks'),


// ============================
// Application-Level Middleware
// ============================
app.use(cors());
app.use(express.static(path.join(__dirname + "./public")));         // Sets the static folder
app.set('views', path.join(__dirname, './views'));                  // Sets views route
app.use(bodyParser.json());                                         // Parser in-coming data into json format
app.use('/users', userRoutes);
// app.use('/tasks', tasksRoute);
// app.use('/i955', i955Route);


// =====================
// Connection to mongoDB
// =====================
mongoose.connect(config.database);
mongoose.connection.on('connected', () => { console.log(`| => Connected to Database: ${config.database}`); });    // On Connection
mongoose.connection.on('error', (err) => { console.log(`| => Database error: ${err}`); });                        // On Connection ERROR


// ========================
// Endpoint Routes Handlers
// ========================
app.get('/', (req, res) => { res.send('Invalid EndPoint'); });          // < Index Route - [ It's now considered an invalid route ] >
app.use((req, res) => {                                                 // route for handling 404 requests(unavailable routes)
   res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
});
app.listen(PORT, () => {                                                // Clients connection port settings
    console.log(`\n====================[ REPORT ]\n| => Connection Status: Server started and is running on localhost at port ${PORT}` ); 
});