const express = require('express');
const router = express.Router();
const Joi = require('joi');
const debug = require('debug')('app:startup');

const courses = [
  { id:1, name: 'course1' },
  { id:2, name: 'course2' },
  { id:3, name: 'course3' },
  { id:4, name: 'course4' },
  { id:5, name: 'course5' }
];

router.get('/', (req, res) => {
  res.send(courses);
});

router.post('/', (req, res) => {
  // * 400 Bad Request
  debug('👍post', req.body)
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

router.get('/:id', (req, res) => {
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
  debug('22', Joi.validate(course, schema));
  return Joi.validate(course, schema);
}

module.exports = router;