const express = require('express');
const router = express.Router();

// TODO: Import router-router Anda di sini
const authRouter = require('./authRoutes');
const { homePage, testPage, resultPage, testsubmitPage } = require('../controllers/pageController');
const { isLoggedIn } = require('../middlewares/authMiddleware');

// TODO: Daftarkan router Anda di sini dengan path yang sesuai
router.use('/', authRouter);

// Route default untuk mengecek apakah API berjalan
router.get('/', homePage);
router.get('/test', isLoggedIn, testPage);
router.get('/result', isLoggedIn, resultPage);
router.post('/test/submit', isLoggedIn, testsubmitPage);

module.exports = router;