var express = require('express');
var router = express.Router();

/* GET login page page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Ryde Login' });
});

module.exports = router;