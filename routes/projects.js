var express = require('express');
var router = express.Router();

router.get('/projects', function(req, res, next) {
  let config = {
    title: 'Projects',
    stylesheet: 'projects.css', 
  }

  res.render('projects', config);
});

module.exports = router;
