const express = require('express');
const userControl = require('../controllers/userControl');
const router = express.Router();

router.post('/register', userControl.register);
router.post('/refresh_token', userControl.refreshtoken);
router.post('/login',userControl.login);
module.exports = router;
