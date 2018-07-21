const config = require('./config/1955_api_db');
const mongoose = require('mongoose');

const I955_API_Schema = new mongoose.Schema({
      title: String,
      description: { type: String, default: '' },
      completed: { type: Boolean, default: true }
},  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

// Connects to mongo db
mongoose.connect(config.database);                               // Connect to Database
mongoose.model('I955_API', I955_API_Schema);                     // Mongoose Schema for 1955_API_DB
mongoose.connection.on('connected', () => {                      // On Connection
    console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (err) => {                      // On Connection ERROR
    console.log('\n====================[ ERRORS ]\n| => Database error: ' + err);
});



// export 1955_API model for use in other files.
mongoose.Promise = global.Promise;
const I955_API = mongoose.model('I955_API');
module.exports = I955_API;