const express = require('express');
const router = express.Router();

const Family = require('../models/family');

// Mock Data

let smith = new Family('Smith');
smith.id = 1;

let jones = new Family('Jones');
jones.id = 2;

let doe = new Family('Doe');
doe.id = 3;

let families = [smith, jones, doe];
let idCounter = 4;

// Routes

router.get('/:id', function getFamily(req, res) {
  const familyId = +req.params.id;
  const family = families.find(family => family.id === familyId);

  if (family) {
    res.json(family);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to find the requested family.' });
  }
});

router.put('/:id', function updateFamily(req, res) {
  const familyId = +req.params.id;
  const family = families.find(family => family.id === familyId);

  if (family && isObject(req.body)) {
    delete req.body.id;
    Object.assign(family, req.body);
    res.json(family);
  } else {
    res
      .status(404)
      .json({ message: 'Unable to update the requested family.' });
  }
});

router.delete('/:id', function removeFamily(req, res) {
  const familyId = +req.params.id;
  const familyIndex = families.findIndex(family => family.id === familyId);

  if (familyIndex !== undefined) {
    families.splice(familyIndex, 1);
    res.json({ message: 'Family successfully removed.' });
  } else {
    res
      .status(404)
      .json({ message: 'Unable to remove the requested family.' });
  }
});

router.get('/', function getAllFamilies(req, res) {
  res.json(families);
});

router.post('/', function addFamily(req, res) {
  if (isObject(req.body) && req.body.name) {
    const family = new Family(req.body.name);
    Object.assign(family, req.body);
    family.id = idCounter++;
    families.push(family);
    res.json(family);
  } else {
    res
      .status(404)
      .json({ message: 'Please provide a valid family.' });
  }
});


function isObject(body) {
  return body && body === Object(body) && !Array.isArray(body) && typeof body !== 'function';
}

module.exports = router;