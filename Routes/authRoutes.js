const express = require('express');
const router = express.Router();

// REST ARCHITECTRUE

const { UserRegisteration, UserLogin } = require('../Controllers/authController.js');

// ---------- Routes ----------------//

router.post('/registeration', UserRegisteration);
router.post('/login', UserLogin);


module.exports = router;