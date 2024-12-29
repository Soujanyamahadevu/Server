const express = require('express');
const { signUp, login, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
