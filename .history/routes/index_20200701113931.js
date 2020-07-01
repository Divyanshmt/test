var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/api', function (req, res, next) {
  let businessId = req.query.businessId
  if (businessId === 'qwerty') // we can querry with database while implementation
    res.render('index', { title: 'ACTYV' });
});

module.exports = router;
