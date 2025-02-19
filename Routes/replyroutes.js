const express = require("express");
const router = express.Router();

const ReplyComments = require('../Controllers/replyControllers.js')

// REST ARCHITECTURE
//------------------------------13feb--------------------


router.post('/', ReplyComments);

module.exports = router;