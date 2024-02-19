const {connect} = require('mongoose')

module.exports = {
    ConnectionDB: () => {
        connect()
    }
}