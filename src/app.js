const express = require('express');
const booking = require('./routers/bookings.router.js');
const users   = require('./routers/users.router.js');
const connection = require('./config/connection.js');
require('dotenv').config();

const app   = express();
const port  = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/bookings', booking);
app.use('/api/users', users);

connection.ConnectionDB();

app.listen(port,() => {
    console.log(`running on port: ${port}`);
});