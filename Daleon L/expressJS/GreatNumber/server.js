//IMPORTS
var express = require("express");
var app = express();
var path = require('path');
//END OF IMPORTS

//EXECUTOR/ ROUTES

// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 60000
//     }
// }))

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/static/index.html'));
    app.use(express.static(__dirname + "/static"));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
});

//END OF EXECUTOR/ROUTES

// LISTENER
app.listen(2224, function () {
    console.log("listening on port 2224");
})
//END OF LISTENER