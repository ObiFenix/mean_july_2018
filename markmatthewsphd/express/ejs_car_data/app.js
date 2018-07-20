var express = require('express');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){
     var title = 'EJS Cars';
     // var

     response.render('cars', {title: title});
});

app.get('/junker', function (request, response){
     var title = 'Junker';
     var make = 'Chevrolet';
     var year = '???????';
     var image = '/images/car_02.jpg';
     var details = [
         {milage: 200+'k'},
         {engine: '454'},
         {transmission: 'three-on-the-tree' }
         ];
     response.render('details', {
         title: title,
         make: make,
         year: year,
         image: image,
         details: details
     });
});

app.get('/vw', function (request, response){
     var title = 'Volkswagen';
     // var

     response.render('details', {title: title});
});

app.get('/porshe', function (request, response){
     var title = 'Porshe';
     // var

     response.render('details', {title: title});
});


app.listen(6789
    , function () {
    console.log('hello, i am the antichrist. try listening on port 666');
});