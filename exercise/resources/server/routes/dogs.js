const express = require('express');
const router = express.Router();

const Dog = require('../models/dog');

// Mock Data

let rover = new Dog('Rover');
rover.id = 1;
rover.breed = 'Golden Retriever';
rover.description = 'Loves to play fetch';
rover.birthday = new Date(2006, 4, 20);

let bandit = new Dog('Bandit');
bandit.id = 2;
bandit.breed = 'Border Collie';
bandit.description = 'Has a large dark patch of fur around left eye';
bandit.birthday = new Date(2013, 8, 7);

let beethoven = new Dog('Beethoven');
beethoven.id = 3;
beethoven.breed = 'St. Bernard';
beethoven.description = 'May or may not come with a whisky barrel';
beethoven.birthday = new Date(2016, 0, 25);

let dogs = [rover, bandit, beethoven];
let idCounter = 4;

// Routes

router.get('/:id', function get(req, res) {
  const id = +req.params.id;
  const dog = dogs.find(dog => dog.id === id);

  if (dog) {
    res.json(dog);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to find the requested dog.' });
  }
});

router.put('/:id', function update(req, res) {
  const id = +req.params.id;
  const dog = dogs.find(dog => dog.id === id);

  if (dog && isObject(req.body)) {
    delete req.body.id;
    Object.assign(dog, req.body);
    res.json(dog);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to update the requested dog.' });
  }
});

router.delete('/:id', function remove(req, res) {
  const id = +req.params.id;
  const index = dogs.findIndex(dog => dog.id === id);

  if (index !== undefined) {
    dogs.splice(index, 1);
    res.json({ message: 'Dog successfully removed.' });
  } else {
    res
      .status(404)
      .json({ message: 'Unable to remove the requested dog.' });
  }
});

router.get('/', function getAll(req, res) {
  res.json(dogs);
});

router.post('/', function add(req, res) {
  if (isObject(req.body) && req.body.name) {
    const dog = new Dog(req.body.name);
    Object.assign(dog, req.body);
    dog.id = idCounter++;
    dogs.push(dog);
    res.json(dog);
  } else {
    res
      .status(404)
      .json({ message: 'Please provide a valid dog' });
  }
});


function isObject(body) {
  return body && body === Object(body) && !Array.isArray(body) && typeof body !== 'function';
}

module.exports = router;