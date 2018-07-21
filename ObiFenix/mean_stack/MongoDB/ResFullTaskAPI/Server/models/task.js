const config = require('./config/task_db');
const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
	  title: {type: String, required: true, minlength: 3, maxlength: 30},
	  description: {type: String, required: true, maxlength: 100, default: ""},
	  completed: {type: Boolean, required: false, default: false}
},  { timestamps: true });

// // Connecting to mongo db
// mongoose.connect(config.database);
// mongoose.model('Tasks', TasksSchema);
// mongoose.connection.on('connected', () => {                      // On Connection
// 	console.log('Connected to database ' + config.database);
// });
// mongoose.connection.on('error', (err) => {                      // On Connection ERROR
// 	console.log('\n====================[ ERRORS ]\n| => Database error: ' + err);
// });

// export User model for use in other files.
mongoose.Promise = global.Promise;
const Task = mongoose.model('Tasks');
module.export = Task;