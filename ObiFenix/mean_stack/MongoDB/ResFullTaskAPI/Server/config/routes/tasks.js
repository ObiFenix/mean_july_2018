// ================================
// Load All Required express module
// ================================
const express = require("express"),
      router = express.Router();


// ========================
// Endpoint Routes Handlers
// ========================

// < HomePage - All Tasks [ GET Method ] >
router.get('/tasks', (req, res) => {
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

// < Single Task [ GET Method ] >
router.get('/tasks/:id', (req, res) => {
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

// < CREATE Task - [ POST Method ] >
router.post('/tasks/', (req, res) => {
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

// < UPDATE Task - [ POST Method ] >
router.put('/tasks/:id', (req, res) => {
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

// < DELETE Task - [ DELETE Method ] >
router.delete('/tasks/:id', (req, res) => {
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

module.exports = router;