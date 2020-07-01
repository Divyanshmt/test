var express = require('express');
var router = express.Router();


router.get('/api', function (req, res, next) {
  let businessId = req.query.businessId
  res.writeHead(200, {
    'Content-Type': 'application/xhtml+xml; charset=utf-8',
    'X-Frame-Options': 'DENY'
  });
  // we can querry with database while implementation
  if (businessId === 'qwerty') {
    res.render('index', { title: 'ACTYV' });
  }

});

module.exports = router;
