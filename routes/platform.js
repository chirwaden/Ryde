var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('platform', { title: 'Platform' });
});

module.exports = router;