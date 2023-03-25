const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongodb connection failed')
})

connection.on('connected', () => {
    console.log('successfully connected to mongodb')
})

module.exports = mongoose