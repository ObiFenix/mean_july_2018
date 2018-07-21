// =======================
// Load the express module
// =======================

const express = require("express");
const router = express.Router();
const User = require('../../models/user');


// ========================
// Endpoint Routes Handlers
// ========================

// < HOMEPAGE > [ Show All Users ]
router.get('/', (req, res, next) => { res.send(`<h1 style="color:gray; text-align:center;">HOME PAGE</h1> ${User.collection.$print}`); });

// < LOGIN > [ w/ Authentication ]
router.post('/login', (req, res, next) => {
    res.send('<h1 style="color:gray; text-align:center;">LOGIN PAGE</h1>');
});

// < REGISTER > [ w/ Validation ]
router.post('/register', (req, res, next) => {
    res.send('<h1 style="color:gray; text-align:center;">REGISTER PAGE</h1>');
});

// < PROFILE > [ Protected View ] [ Required Authentication ]
router.get('/profile', (req, res, next) => { 
    res.send('<h1 style="color:gray; text-align:center;">PROFILE PAGE</h1>');
});

// < VALIDATION > [ Validate User Credentials ]
router.get('/validate', (req, res, next) => {
    res.send('<h1 style="color:gray; text-align:center;">VALIDATION PAGE</h1>');
});

// < AUTHENTICATION > [ User Profile view ] [ isProtected ? ]
router.post('/authenticate', (req, res, next) => { 
    res.send('<h1 style="color:gray; text-align:center;">AUTHENTICATION PAGE</h1>');
});

module.exports = router;




// router.post('/register', (req, res, next) => {
//    let errors = [];
//    if ((req.body.password == req.body.confirm_pwd) && (req.body.password.length > 7) && (req.body.confirm_pwd.length > 7)){
//       bcrypt.genSalt(10, (err, salt) => {
//          bcrypt.hash(req.body.password, salt, (err, hashed_pwd) => {

//             const user = new User({
//                first_name: req.body.first_name, 
//                last_name:  req.body.last_name, 
//                email:      req.body.email, 
//                password:   hashed_pwd, 
//                birthday:   req.body.birthday});

//             user.save((err) => {
//                if (err)  res.render('Register', { errors: user.errors });
//                else {
//                   req.session.uid = user._id;
//                   req.session.username = user.first_name;
//                   res.render('/success');	
//                }
//             });
//          });
//       });
//    }
//    else {
//       errors.push({message: "Passwords must match and have at least 8 characters."});
//       res.render('Register', {errors: errors});
//    }
// });

// app.post('/login', (req, res, next) => {

//    let errors = [];

//    User.findOne({email: req.body.email}, (err, user) => {
//       if (user) {

//          bcrypt.compare(req.body.password, user.password).then((status) => {
//             if (status == false)  res.render('Login', { errors: user.errors });
//             else {
//                req.session.uid = user._id;
//                req.session.username = user.first_name;
//                res.redirect('/success');
//             }
//          });
//       }
//       else {
//          errors.push({ message: "Invalid login information." });
//          res.render('Login', { errors: errors });
//       }
//    });
// });

// // route for user's dashboard - Success page
// app.get('/success', (req, res, next) => {
//    //    if (req.sssion.uid /*  && req.cookies.user_sid */) { res.render('Success'); }
//    //    else                                          { res.redirect('/loginform'); }
//    User.find({}, (err, data) => { res.render('Success', { req:req, allusers: data }); });
// });

// // Logs the user out and earase the user session... 
// // I am still waiting for the next food to drop...
// // other users applyig this approach have experienced some issues... so far so good!
// app.get('/logout', (req, res, next) => {
//    //    if (req.session.uid /*  && req.cookies.user_sid */) { res.clearCookie('user_sid');  res.redirect('/'); } 
//    //    else                                          { res.redirect('/loginform'); }
//    req.session.destroy( (err) => { 
//       if (err) { console.log(err); }  
//       else     { res.redirect('/login'); }  
//    });
// });

// // route for handling 404 requests(unavailable routes)
// app.use('/', (req, res) => {
//     res.status(404).send("HTTP 404 ERROR: Sorry can't find that page!")
//  });
