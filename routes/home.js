const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Hello Canada 🇨🇦');
  res.render('index', {
    title: 'From Pug 🐶',
    message: 'Hello Canada 🇨🇦'
  })
});

module.exports = router;