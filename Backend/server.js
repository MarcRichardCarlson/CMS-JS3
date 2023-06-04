const app = require('./app')
const mongoose = require('mongoose')

require('dotenv').config()

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('Server running on' + 'http://localhost:'+ PORT))

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI) // <-- Hinding our password in this variable from .env file
        console.log('Connected to db')
    } catch(err){
        console.log(err.message)
    }
}

connect()