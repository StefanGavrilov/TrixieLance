const express = require('express');
const router = express.Router();

const GetUsers = require('./GetUsers.js');
const PostUser = require('./PostUser.js');

router.get('/', GetUsers);

router.post('/', PostUser);

module.exports = router;
