var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/facebook-login', function(req, res, next) {
  res.render('login-page');
});

module.exports = router;
