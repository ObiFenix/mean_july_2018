let mongoose = require('mongoose');

let TasksSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 3, maxlength: 30},
	description: {type: String, required: true, maxlength: 100, default: ""},
	completed: {type: Boolean, required: false, default: false}
}, {timestamps: true});

// Connecting to mongo db
mongoose.connect('mongodb://localhost/tasks_db');
mongoose.model('Tasks', TasksSchema);

// export User model for use in other files.
mongoose.Promise = global.Promise;
let Task = mongoose.model('Tasks');
module.export = Task;