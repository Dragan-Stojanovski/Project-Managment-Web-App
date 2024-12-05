
const express = require("express");
const multer = require("multer");
const router = express.Router();
const {register,login} = require('./controllers/user/authController');
const {getUserOwnData} = require('./controllers/user/userController');
const authenticateToken = require("./services/middlewares/authenticateToken");
const {jobImport} = require("./controllers/job/jobController");
const upload = multer({ dest: "uploads/" });

router.post('/register', register)
router.post('/login', login)
router.get('/userown',authenticateToken, getUserOwnData)
router.post('/import', upload.single('file'), jobImport);

module.exports = router;