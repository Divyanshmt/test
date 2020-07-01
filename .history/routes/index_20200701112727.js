var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('index', { title: 'ACTYV' });
});

module.exports = router;
