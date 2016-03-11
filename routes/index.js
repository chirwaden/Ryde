var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rydeapp.com' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
        if (err) { 
            res.render('login', { message: err.message }); 
        }
        if (!user) { 
            res.render('login', { 
                failure: true,
                badPassword: true,
                message: "Sorry, that password isn't right" 
            });
        }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
        res.render('console', { user: req.user });
    });
  })(req, res, next);
});


/* GET logout page. */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
/* GET login page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* POST register page. */
router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  });

/* GET console page. */
router.get('/console', isAuthenticated, function(req, res, next) {
    res.render('console', { user: req.user });
});

module.exports = router;

function isAuthenticated(req, res, next) {
    if (!req.user){
        res.redirect('/login');
    }else{
        next();
    }
}