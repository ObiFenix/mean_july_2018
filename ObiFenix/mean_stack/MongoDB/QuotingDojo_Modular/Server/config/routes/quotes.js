const mongoose = require('mongoose');
const Quote = require('../../models/quote');

module.exports = (app) => {

    app.get('/', (req, res) => { res.render('Index'); });

    app.get('/quotes', (req, res) => {
        Quote.find({}, (err, data) => {
            console.log(data);
            if (err) { res.render('Index', { errors: data.errors }); }
            else     { res.render('Quotes', { quotes: data }); }
        });
    });
    
    // Handles Endpoint Route "POST" Requests
    app.post('/quotes', (req, res) => {
        function censor(str, arr) {
            var count = 0;
            var new_str = "";
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].length == str.length) {
                    for (var y = 0; y < str.length; y++) {
                        if (str[y] == arr[i][y] || str[y] == "?") {
                        count++;
                        if (count % arr[i].length == 0) {
                            for (var j = 0; j < arr[i].length; j++) {
                                new_str += "X";
                            }  return new_str;
                        }
                        }
                    }
                }
            }
            return str;
        }
    
        var str = req.body.quote;
        var arr = ["WAT", "onion"];
        var q = censor(str, arr);
        var quote = new Quote({
            name: req.body.quote,
            text: q
        });    
        quote.save((err) => {
            if (err) { res.render('index', { errors: quote.errors }); }
            else     { res.redirect('/quotes'); }
        });
    });

    app.use((req, res) => {                                                 // route for handling 404 requests(unavailable routes)
        res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
    });

    return app;
}


// const express = require("express");
// const router = express.Router();
// const mongoose = require('mongoose');
// const Quote = require('../../../Server/models/quote');

// router.get('/', (req, res) => { res.render('Index'); });

// router.get('/quotes', (req, res) => {
//     Quote.find({}, (err, data) => {
//         console.log(data);
//     if (err) { res.render('Index', { errors: data.errors }); }
//     else     { res.render('Quotes', { quotes: data }); }
//     });
// });

// // Handles Endpoint Route "POST" Requests
// router.post('/quotes', (req, res) => {
//     function censor(str, arr) {
//         var count = 0;
//         var new_str = "";
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].length == str.length) {
//                 for (var y = 0; y < str.length; y++) {
//                     if (str[y] == arr[i][y] || str[y] == "?") {
//                         count++;
//                         if (count % arr[i].length == 0) {
//                             for (var j = 0; j < arr[i].length; j++) {
//                                 new_str += "X";
//                             }  return new_str;
//                         }
//                     }
//                 }
//             }
//         }
//         return str;
//     }
//     var str = req.body.quote;
//     var arr = ["TEMP", "option"];
//     var q = censor(str, arr);
//     var quote = new Quote({
//         name: req.body.quote,
//         text: q
//     });
//     quote.save((err) => {
//         if (err) { res.render('Index', { errors: quote.errors }); }
//         else { res.redirect('/quotes'); }
//     });
// });


// router.use((req, res) => {                                                 // route for handling 404 requests(unavailable routes)
//     res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
// });

// module.exports = router;