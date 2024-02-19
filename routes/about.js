var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  let config = {
    title: 'About',
    stylesheet: 'about.css', 
  }

  res.render('about', config);
});

module.exports = router;
