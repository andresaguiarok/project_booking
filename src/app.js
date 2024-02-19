const express = require('express')
const booking = require('./routers/bookings.router.js')
require('dotenv').config()

const app   = express()
const port  = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/bookings', booking)

app.listen(port,() => {
    console.log(`running on port: ${port}`)
})