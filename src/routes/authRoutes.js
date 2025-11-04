const express = require('express');
const router = express.Router();
const { loginPage, googleLogin, googleCallback, logout } = require('../controllers/authController');

router.get('/login', loginPage);
router.get('/auth/google', googleLogin);
router.get('/auth/google/callback', googleCallback);
router.get('/logout', logout);

module.exports = router;