const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Canada 🇨🇦');
});

app.get('/api/courses', (req, res) => {
  res.send({ some: 'json' });
})

app.get('/api/courses/:year/:month', (req, res) => {
  res.send({ 
    param: req.params,
    qry: req.query
  }); // {"param":{"year":"2020","month":"05"},"qry":{"sortBy":"year","version":"1"}}
})

const port = process.env.PORT || 5000;
// * In MAC we can set port by adding command 'export PORT=5000'
// * In WINDOWS we can set port by adding command 'set PORT=5000'

app.listen(port, () => console.log(`Listening on port ${port} ⏰`));

