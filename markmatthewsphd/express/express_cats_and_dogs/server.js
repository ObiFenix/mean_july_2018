var express = require('express');

console.log('Lets find out what express is', express);

var app = express();

console.log('Lets find out what app is', app);

app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    console.log(' this is the request object', request);
    console.log(' this is the response object', response);

    response.send("<h1>hello express</h1>");


});

app.get('/users', function (request, response) {
    var users_array = [
        {name: 'michael', email: 'michael@cd.com'},
        {name: 'jay', email: 'jay@cd.com'},
        {name: 'brendan', email: 'brendan@cd.com'},
        {name: 'andrew', email: 'andrew@cd.com'}
    ];
    response.render('users', {users: users_array});
});

app.listen(666, function () {
    console.log('listing on port 666');
});