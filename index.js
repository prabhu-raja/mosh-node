const express = require('express');
const app = express();

const courses = [
  { id:1, name: 'course1' },
  { id:2, name: 'course2' },
  { id:3, name: 'course3' },
  { id:4, name: 'course4' },
  { id:5, name: 'course5' }
];

app.get('/', (req, res) => {
  res.send('Hello Canada 🇨🇦');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(val => val.id === parseInt(req.params.id));
  if(!course) {
    res.status(404).send('Course with given id was not found😿');
  }
  res.send(course);
})

const port = process.env.PORT || 5000;
// * In MAC we can set port by adding command 'export PORT=5000'
// * In WINDOWS we can set port by adding command 'set PORT=5000'

app.listen(port, () => console.log(`Listening on port ${port} ⏰`));

