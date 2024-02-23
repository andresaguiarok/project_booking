const { connect } = require('mongoose')
require('dotenv').config()
let url = process.env.KEY_SECRET_MONGODB

module.exports = {
    ConnectionDB: () => {

        connect(url)
        console.log('database connected to server');
    }
}