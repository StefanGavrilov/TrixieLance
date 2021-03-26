const express = require('express');
const router = express.Router();

const users = require('./users');
const packets = require('./packets');

router.use('/users', users);
router.use('/packets', packets);

router.get('/', (req, res) => {
  res.json({ message: 'Hello! Welcome to my RESTful API blog!' });
});

module.exports = router;
