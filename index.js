const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('🚕Logging....🚕');
  next();
});

app.use((req, res, next) => {
  console.log('🚓Authenticating....🚓');
  next();
});

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
});

app.post('/api/courses', (req, res) => {
  // * 400 Bad Request
  console.log('👍post', req.body)
  const { error } = validateCourse(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  // * 404 not found
  const course = courses.find(val => val.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send('Course with given id was not found😿');
  }
  // * 400 Bad Request
  const { error } = validateCourse(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }
  // * 200 Update
  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // * 404 not found
    const course = courses.find(val => val.id === parseInt(req.params.id));
    if(!course) {
      return res.status(404).send('Course with given id was not found😿');
    }
    //
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(val => val.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send('Course with given id was not found😿');
  }
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  }
  console.log('22', Joi.validate(course, schema));
  return Joi.validate(course, schema);
}

const port = process.env.PORT || 5000;
// * In MAC we can set port by adding command 'export PORT=5000'
// * In WINDOWS we can set port by adding command 'set PORT=5000'

app.listen(port, () => console.log(`Listening on port ${port} ⏰`));

