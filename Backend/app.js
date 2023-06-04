const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const app = express()


//Middleware
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

//Controllers
app.use('/api/users', require('./controllers/userController'))

app.use('/api/products', require('./controllers/productController'))
app.use('/orders', require('./controllers/orderController'))

module.exports = app



