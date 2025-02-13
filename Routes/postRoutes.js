const express = require("express");
const router = express.Router();

const { CreatePost, FetchAllPost, UpdatePostById, DeletePostById, TogglePostLike, FetchAllPostById } = require('../Controllers/postController.js');

// REST ARCHITECTURE

router.post('/create', CreatePost);
router.get('/fetch', FetchAllPost);
router.put('/update', UpdatePostById);
router.delete('/delete', DeletePostById);
router.put('/like', TogglePostLike);
router.get('/fetchid', FetchAllPostById)

module.exports = router;