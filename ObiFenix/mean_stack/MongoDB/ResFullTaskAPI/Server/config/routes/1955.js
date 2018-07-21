// ========================
// Endpoint Routes Handlers
// ========================

app.get('/i955_api', (req, res) => {
    I955_API.find({}, (err, i955_api) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log("All the i955_api data has successfully been retrieved from the db to the Front-End", err);
            res.json({ message: "Success", data: i955_api })
        }
    });
});

app.get('/i955_api/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    I955_API.find({ _id: id }, (err, i955_api) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('Single data successfully retrieved for the Front-End!', i955_api);
            res.json({ message: "Success", data: i955_api })
        }
    });
});

app.post('/i955_ api/', (req, res) => {
    console.log("REQUEST", req.body.title)
    var i955_api = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    });
    I955_API.save((err) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('Data successfully retrieved from the Front-End and added to the db!');
            res.json({ message: "Success", data: i955_api })
        }
    });
});

app.put('/i955_api/:id', (req, res) => {
    let id = req.params.id;
    I955_API.findById(id, (err, i955_api) => {
        if (err) { console.log('\n==> ERROR Report: Something went wrong\n==> ERROR Info: ' + task.error); }
        else {
            if (req.body.title)       { i955_api.title = req.body.title; }
            if (req.body.description) { i955_api.description = req.body.description; }
            if (req.params.completed) { i955_api.completed = req.body.completed; }
            task.save((err) => {
                if (err) {
                    console.log("Returned error", err);
                    res.json({ message: "Error", error: err });
                } else {
                    console.log('The requested i955_api data has successfully been edited!');
                    res.json(i955_api)
                }
            });
        }
    });
});

app.delete('/i955_api/:id', (req, res) => {
    console.log("trying to delete");
    let id = req.params.id;
    I955_API.remove({ _id: id }, (err) => {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            console.log('The requested i955_api data has successfully been deleted!');
            res.json({ message: "Success" })
        }
    });
});