let mongoose = require('mongoose');

let I955_API_Schema = new mongoose.Schema({
    title: String,
    description: { type: String, default: '' },
    completed: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

// Connecting to mongo db
mongoose.connect('mongodb://localhost/i955_api_db');
mongoose.model('I955_API', I955_API_Schema);

// export 1955_API model for use in other files.
mongoose.Promise = global.Promise;
let I955_API = mongoose.model('I955_API');
module.exports = I955_API;