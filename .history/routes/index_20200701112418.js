var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api:ID', function (req, res, next) {
  res.render('index', { title: 'ACTYV' });
});

module.exports = router;
