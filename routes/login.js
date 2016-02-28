var express = require('express');
var router = express.Router();

/* GET login page page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login page for Ryde' });
});

module.exports = router;