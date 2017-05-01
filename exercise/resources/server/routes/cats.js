const express = require('express');
const router = express.Router();

const Cat = require('../models/cat');

// Mock Data

let sparkles = new Cat('Sparkles');
sparkles.id = 1;
sparkles.breed = 'Persian';
sparkles.description = 'White and very fluffy';
sparkles.birthday = new Date(2006, 4, 20);

let bandit = new Cat('Bandit');
bandit.id = 2;
bandit.breed = 'Calico';
bandit.description = 'Has a large dark patch of fur around left eye';
bandit.birthday = new Date(2013, 8, 7);

let pebbles = new Cat('Pebbles');
pebbles.id = 3;
pebbles.breed = 'Bengal';
pebbles.description = 'Seems to think it is actually a tiger';
pebbles.birthday = new Date(2016, 0, 25);

let fluffy = new Cat('Fluffy');
fluffy.id = 4;
fluffy.breed = 'Ragdoll';
fluffy.description = 'Grumpy';
fluffy.birthday = new Date(2015, 2, 23);

let cats = [sparkles, bandit, pebbles, fluffy];
let idCounter = 5;

// Routes

router.get('/:id', function getCat(req, res) {
  const catId = +req.params.id;
  const cat = cats.find(cat => cat.id === catId);

  if (cat) {
    res.json(cat);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to find the requested cat.' });
  }
});

router.put('/:id', function updateCat(req, res) {
  const catId = +req.params.id;
  const cat = cats.find(cat => cat.id === catId);

  if (cat && isObject(req.body)) {
    delete req.body.id;
    Object.assign(cat, req.body);
    res.json(cat);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to update the requested cat.' });
  }
});

router.delete('/:id', function removeCat(req, res) {
  const catId = +req.params.id;
  const catIndex = cats.findIndex(cat => cat.id === catId);

  if (catIndex !== undefined) {
    cats.splice(catIndex, 1);
    res.json({ message: 'Cat successfully removed.' });
  } else {
    res
      .status(404)
      .json({ message: 'Unable to remove the requested cat.' });
  }
});

router.get('/', function getAllCats(req, res) {
  res.json(cats);
});

router.post('/', function addCat(req, res) {
  if (isObject(req.body) && req.body.name) {
    const cat = new Cat(req.body.name);
    Object.assign(cat, req.body);
    cat.id = idCounter++;
    cats.push(cat);
    res.json(cat);
  } else {
    res
      .status(404)
      .json({ message: 'Please provide a valid cat' });
  }
});


function isObject(body) {
  return body && body === Object(body) && !Array.isArray(body) && typeof body !== 'function';
}

module.exports = router;