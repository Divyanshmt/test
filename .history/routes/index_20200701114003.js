var express = require('express');
var router = express.Router();


router.get('/api', function (req, res, next) {
  let businessId = req.query.businessId

  // we can querry with database while implementation
  if (businessId === 'qwerty')
    res.render('index', { title: 'ACTYV' });


});

module.exports = router;
