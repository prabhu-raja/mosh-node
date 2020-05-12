const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Canada 🇨🇦');
});

app.get('/api/courses', (req, res) => {
  res.send({ some: 'json' });
})

app.listen('5000', () => console.log('Listening on Port 5000 ⏰'));