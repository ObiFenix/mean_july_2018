

// =======================
// Load the express module
// =======================

const express = require("express"),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      Task = require('./models/task_api');



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

app.get('/tasks', (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log("All tasks have successfully been retrieved for the Front-End", err);
            res.json({ message: "Success", tasks: tasks });
        }
    }); //res.render('index', {errors: req.session.errors});
});

app.get('/tasks/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    Task.find({ _id: id }, (err, data) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('The requested task has successfully been retrieved for the Front-End!', data);
            res.json({ message: "Success", task: data });
        }
    });
});

app.post('/tasks/', (req, res) => {
    console.log("REQUEST", req.body.title)
    var task = new Task({
        title: req.body.title, 
        description: req.body.description, 
        completed: req.body.completed
    });
    task.save((err) => { 
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('A task has successfully added to the database from the Front-End!');
            res.json({ message: "Success", task: task });
        }
    });
});

app.put('/tasks/:id', (req, res) => {
    let id = req.params.id;
    Task.findById(id, (err, task) => {
        if (err) { console.log('\n==> ERROR Report: Something went wrong\n==> ERROR Info: ' + task.error); }
        else {
            if (req.body.title)       { task.title = req.body.title; }
            if (req.body.description) { task.description = req.body.description; }
            if (req.params.completed) { task.completed = req.body.completed; }
            task.save((err) => {
                if (err) {
                    console.log("Returned error", err);
                    res.json({ message: "Error", error: err });
                } else {
                    console.log('The requested task has successfully been edited!');
                    res.json(task);
                }
            })
        }
    });
});

app.delete('/tasks/:id', (req, res) => {
    console.log("trying to delete");
    let id = req.params.id;
    Task.remove({ _id: id }, function (err) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('The requested task has successfully deleted!');
            res.json({ message: "Success" });
        }
    });;
});

// Set our Server to Listen on Port: 8000
app.set('port', 8000);
app.listen(app.get('port'), () => console.log(`The Task App started on port ${app.get('port')}`));
