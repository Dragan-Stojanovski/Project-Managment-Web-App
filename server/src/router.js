
const express = require("express");
const router = express.Router();
const {register,login} = require('./controllers/user/authController')
const {getUserOwnData} = require('./controllers/user/userController')
const authenticateToken = require("./services/middlewares/authenticateToken");

router.post('/register', register)
router.post('/login', login)
router.get('/userown',authenticateToken, getUserOwnData)

module.exports = router;