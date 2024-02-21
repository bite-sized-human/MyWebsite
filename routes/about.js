var express = require('express');
var router = express.Router();
var getGithubStreak = require('../public/javascripts/fetchGithubStreak.js');;


router.get('/about', function(req, res, next) {
  let config = {
    title: 'About',
    stylesheet: 'about.css',
    streak: getGithubStreak(),
  }

  res.render('about', config);
});

module.exports = router;
