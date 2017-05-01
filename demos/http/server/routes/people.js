const express = require('express');
const router = express.Router();

const Person = require('../models/person');

// Mock Data

let john = new Person('John', 'Smith');
john.id = 1;

let jane = new Person('Jane', 'Doe');
jane.id = 2;

let sam = new Person('Sam', 'Hill');
sam.id = 3;

let people = [john, jane, sam];
let idCounter = 4;

// Routes

router.get('/:id', function get(req, res) {
  const id = +req.params.id;
  const person = people.find(cat => cat.id === id);

  if (person) {
    res.json(person);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to find the requested person.' });
  }
});

router.put('/:id', function update(req, res) {
  const id = +req.params.id;
  const person = people.find(cat => cat.id === id);

  if (person && isObject(req.body)) {
    delete req.body.id;
    Object.assign(person, req.body);
    res.json(person);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to update the requested person.' });
  }
});

router.delete('/:id', function remove(req, res) {
  const id = +req.params.id;
  const index = people.findIndex(cat => cat.id === id);

  if (index) {
    people.splice(index, 1);
    res.json({ message: 'Person successfully removed.' });
  } else {
    res
      .status(404)
      .json({ message: 'Unable to remove the requested person.' });
  }
});

router.get('/', function getAll(req, res) {
  res.json(people);
});

router.post('/', function add(req, res) {
  if (isObject(req.body) && req.body.firstName && req.body.lastName) {
    const person = new Person(req.body.firstName, req.body.lastName);
    Object.assign(person, req.body);
    person.id = idCounter++;
    people.push(person);
    res.json(person);
  } else {
    res
      .status(404)
      .json({ message: 'Please provide a valid person.' });
  }
});


function isObject(body) {
  return body && body === Object(body) && !Array.isArray(body) && typeof body !== 'function';
}

module.exports = router;
