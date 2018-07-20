// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/index.html') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            if (errors) console.log(errors); // added new from stack overflow snippet
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });
    }
    else if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            if (errors) console.log(errors); // added new from stack overflow snippet
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });
    }
    else if(request.url === '/images/car_01.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car_01.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_02.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car_02.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_03.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car_03.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_04.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car_04.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car_05.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car_05.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents) {
            if (errors) console.log(errors); // added new from stack overflow snippet
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            if (errors) console.log(errors); // added new from stack overflow snippet
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });
    }
    else if(request.url === '/images/cat_01.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat_01.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_02.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat_02.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_03.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat_03.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_04.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat_04.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat_05.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat_05.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            if (errors) console.log(errors); // added new from stack overflow snippet
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();

        });
    }
    // request didn't match anything:
    else {
        response.writeHead(418); // LOL Short and Stout
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");

//