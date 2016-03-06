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

<<<<<<< HEAD
/* POST login page. */
router.post('/login', passport.authenticate('local'), function(req, res) {
    
    
    res.redirect('/console');
});

/* GET logout page. */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
=======
/* GET login page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
>>>>>>> master
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
router.get('/console', function(req, res, next) {
  res.render('console', { title: 'Console' });
});

module.exports = router;