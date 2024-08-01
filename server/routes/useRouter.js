const express = require('express');
const userControl = require('../controllers/userControl');
const router = express.Router();

router.post('/register', userControl.register);

module.exports = router;
