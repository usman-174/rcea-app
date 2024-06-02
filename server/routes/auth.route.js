const authController = require('../controllers/auth.controller');
const express = require('express');
const { isAuthenticated } = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', authController.logout)
router.get('/me',isAuthenticated, authController.me)


module.exports = router
