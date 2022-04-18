const router = require('express').Router();

router.post('/signup', (req, res, next) => {
  res.json('signup route post');
});

router.post('/login', (req, res, next) => {
  res.json('login route post');
});

router.get('/verify', (req, res, next) => {
  res.json('verify get route');
});



module.exports = router;