// Required Modules
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts')

// Connects to MongoDB
mongoose.connect('mongodb://localhost/horses_db');
var horseSchema = new mongoose.Schema({
    name:  {type: String},
    breed: {type: String,},
    desc:  {type: String,},
    qty:   {type: Number,},
    date:  {type: Date, default:Date.now }
}, {
   timestamps: true
});

var Horse = mongoose.model('Horse', horseSchema);

// Sets Required Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));
app.use(session({
   secret: "idra*8gon)ba@llrt8the%%lion$sfcyeg37tf",
   proxy: true,
   resave: false,
   saveUninitialized: true
}));

// Sets the view engine to "ejs"
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Route Middleware for Homepage - Displaying all the Horses
app.get('/', (req, res) => {
   Horse.find({}, (err, data) => {
      if(err) {
         console.log('\n:::> something went wrong');
         res.render('Horses', {errors: data.errors});
      } else {
         console.log('\n:::> successfully loaded list of available horses!');
         res.render('Horses', {horses: data});
      }
   });
});

// Route Handler for rendering - <CREATE New Horse> Page
app.get('/mongooses/new', (req, res) => {
   res.render('AddHorse', {req:req});
});

// Route Handler for rendering - <VIEW Horse Info> Page
app.get('/mongooses/:id', (req, res) => {
   Horse.findOne({ _id: req.params.id }, (err, data) => {
      if(err) {
         console.log('\n:::> something went wrong');
         res.render('ViewHorse', {errors: data.errors});
      } else {
         console.log('\n:::> successfully loaded selected horse!');
         res.render('ViewHorse', {horse: data});
      }
   });
});

// Route Handler for rendering - <EDIT Horse Info> Page
app.get('/mongooses/edit/:id', (req, res) => {
   Horse.findOne({ _id: req.params.id }, (err, data) => {
      if(err) {
         console.log('\n:::> something went wrong');
         res.render('Edit', {errors: data.errors, req:req});
      } else {
         console.log('\n:::> successfully loaded selected horse!');
         res.render('Edit', {horse: data, req:req});
      }
   });
});

// CREATE/ADDs a New Horse from "FORM DATA"
app.post('/mongooses', (req, res) => {
   errors = hourseValidation(req.body);
   if (session.count >= 1) { session.count++; }
   else { session.count = 1; }
   console.log("POSTED DATA: ", req.body);
   var horse = new Horse({
       name: req.body.name,
       breed:req.body.breed,
       desc: req.body.desc,
       qty:  req.body.qty,
       date: req.body.date
   });
   horse.save((err) => {
      if(err)  { console.log('\n:::> something went wrong'); }
      else     { console.log('\n:::> successfully added a horse!'); }
      res.redirect('/');
   });
});

// UPDATE Horse information from "FROM DATA"
app.post('/mongooses/:id', (req, res) => {
   console.log("POST DATA", req.body);
   errors = hourseValidation(req.body);
   Horse.update({ _id: req.params.id }, {
      name : req.body.name,
      breed: req.body.breed,
      desc : req.body.desc,
      qty  : req.body.qty,
      date : req.body.date },
      (err, data) => {
         if (err) {
            console.log('\n:::> something went wrong', err);
            req.session.error = err;
            res.redirect('/mongooses/edit/'+req.params.id);
         } else {
            console.log('\n:::> successfully updated horse profile!');
            res.redirect('/');
         }
      }
   );
});

app.get('/mongooses/destroy/:id', function(req, res) {
   Horse.remove({ _id: req.params.id }, (err, data) => {
      res.redirect('/')
   })
})

// Clients connection port settings
var port = process.env.PORT || 8000;
var server = app.listen(port, () => {
    console.log(`Running in localhost at port ${port}`);
});


function hourseValidation (object) {
   var errors = {};
   if (object.name  == undefined) { errors.push('Name field is required and must have at least 3 characters!'); }
   if (object.breed == undefined) { errors.push('Breed field is required and must have at least 3 characters!'); }
   if (object.desc  == undefined) { errors.push('Description field is required and must have at least 3 characters!'); }
   if (object.date  == undefined) { errors.push('Date field is required and must have at least 3 characters!'); }
   return errors
}
