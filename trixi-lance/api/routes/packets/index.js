const express = require('express');
const router = express.Router();

const PostPacket = require('./PostPacket.js');
const GetPackets = require('./GetPackets.js');

router.get('/', GetPackets);
router.post('/', PostPacket);

module.exports = router;
