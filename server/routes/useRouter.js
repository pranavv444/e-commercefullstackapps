const express = require('express');
const userControl = require('../controllers/userControl');
const auth=require('../middleware/auth');
const router = require('express').Router();

router.post('/register', userControl.register);
router.post('/refresh_token', userControl.refreshtoken);
router.post('/login',userControl.login);
router.get('/logout',userControl.logout);
router.get('/infor',auth,userControl.getUser)
module.exports = router;
