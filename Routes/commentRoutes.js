const express = require('express');
const router = express.Router();

const { CreateComment, FetchComment, EditComment, DeleteComment } = require('../Controllers/commentController.js');


router.post('/create', CreateComment)
router.get('/fetch', FetchComment)
router.put('/edit', EditComment)
router.delete('/delete', DeleteComment)


module.exports = router;