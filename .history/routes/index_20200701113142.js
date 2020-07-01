var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function (req, res, next) {
  console.log(req.params)
  res.render('index', { title: 'ACTYV' });
});

module.exports = router;
