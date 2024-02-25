const { bookingModel } = require("../models/booking.model")

class bookingDao {

    async get(){
        try {
            return await bookingModel.find()
        } catch (error) {
            console.log(error);
        }
    }
    async getID(bid){
        try {
            return await bookingModel.findOne({_id: bid})
        } catch (error) {
            console.log(error)
        }

    }
    async post(){

    }
    async updateID(){

    }
    async deleteID(){

    }
    async delete(){

    }
}

module.exports = {
    bookingDao
}