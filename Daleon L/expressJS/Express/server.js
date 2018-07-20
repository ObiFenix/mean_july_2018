var express = require("express");
var app = express();
var path = require('path');

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/static/index.html'));
    app.use(express.static(__dirname + "/static"));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.get("/users", function (request, response) {
        // hard-coded user data
        var users_array = [{
                name: "Michael",
                email: "michael@codingdojo.com"
            },
            {
                name: "Jay",
                email: "jay@codingdojo.com"
            },
            {
                name: "Brendan",
                email: "brendan@codingdojo.com"
            },
            {
                name: "Andrew",
                email: "andrew@codingdojo.com"
            }
        ];
        response.render('users', {
            users: users_array
        });
    })
});

app.listen(7500, function(){
console.log("Congrats \nYou are now listening \ninto port 7500");
});

//One of the prices of giving people free of choice, is that, sometimes, they would make the wrong choice.