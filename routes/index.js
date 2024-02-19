var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let config = {
    title: 'Nice to meet you',
    stylesheet: 'index.css',
  };

  res.render('index', config);
});

module.exports = router;
