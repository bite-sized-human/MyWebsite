var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res, next) {
  let config = {
    title: 'Contact',
    stylesheet: 'contact.css', 
  }

  res.render('contact', config);
});

module.exports = router;
