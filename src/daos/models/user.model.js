const {Schema, model} = require('mongoose');
const collection = 'user';

const userSchema = new Schema({
    firts_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate:{
        type: Date,
    },
    role: {
        type: String,
        default: 'user'
    }

});

const userModel = model(collection, userSchema);

module.exports = {
    userModel
};