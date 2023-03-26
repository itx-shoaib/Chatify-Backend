const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const UserController = require('../controllers/userRoute');
// 3.
router.post('/createUser', UserController.createUser);
router.get('/getLoggedInUser', UserController.getLoggedInUser);

// 4. 
module.exports = router; // export to use in server.js