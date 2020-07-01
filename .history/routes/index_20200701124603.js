var express = require('express');
var router = express.Router();


router.get('/api', function (req, res, next) {
  let businessId = req.query.businessId
  // we can querry with database while implementation
  if (businessId === 'qwerty') {
    res.writeHead(200, {
      'Content-Type': 'application/xhtml+xml; charset=utf-8',
    });
    res.render('index', { title: 'ACTYV' });
  } else {
    res.setHeader('X-Frame-Options', 'DENY')
    res.render('index', { title: 'ACTYV' });
  }
});

module.exports = router;
