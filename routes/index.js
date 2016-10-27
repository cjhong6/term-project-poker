var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poker' });
});

router.get('/lobby', function(req, res, next) {
  res.render('lobby', { title: 'Poker' });
});

module.exports = router;
