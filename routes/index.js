var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Welcome to home page.' });
});

// About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', message: 'This is about page.' });
});

// Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact', message: 'This is contact page.' });
});

module.exports = router;
