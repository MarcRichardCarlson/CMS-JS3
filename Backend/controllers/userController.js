const router = require('express').Router()
const userModel = require('../models/userModel')
const auth = require('../authentication/auth')



router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUser);

//router.get('/me', auth.verifyToken, userModel.getUserData)

module.exports = router
