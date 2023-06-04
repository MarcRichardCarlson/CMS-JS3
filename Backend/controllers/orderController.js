const router = require('express').Router()
const orderModel = require('../models/orderModel')
const authMiddleware = require('../authentication/auth')

//router.post('/', auth.verifyToken, orderModel.createOrder)

//router.get('/:id', auth.verifyToken, orderModel.getOrder)

module.exports = router