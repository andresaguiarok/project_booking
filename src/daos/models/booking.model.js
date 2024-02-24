const {Schema, model} = require('mongoose')

const collection = 'bookings'

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

const bookingModel = model(collection, bookingSchema)

module.exports ={ 
    bookingModel
}