const express = require('express');
const router = express.Router();

const { register, login, me } = require('../Controllers/AuthController');

router.post('/register', register);
router.post('/login', login);
router.get('/getme', me);


module.exports = router;