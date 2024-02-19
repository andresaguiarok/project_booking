const {Schema, model} = require('mongoose')

const bookingsCollection = 'Bookings'

const bookingSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const bookingModel = model()