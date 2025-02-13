const express = require("express");
const router = express.Router();

const { ReplyComments } = require('../Controllers/replycontrollers.js');

// REST ARCHITECTURE


router.get('/fetchallid', ReplyComments);

module.exports = router;