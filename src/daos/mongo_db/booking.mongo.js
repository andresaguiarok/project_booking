const { bookingModel } = require("../models/booking.model")

class bookingDao {

    async get(){
        try {
            return await bookingModel.find()
        } catch (error) {
            console.log(error);
        }
    }
    async getID(data){
        try {
            return await bookingModel.findOne(data)
        } catch (error) {
            console.log(error)
        }

    }
    async post(postBooking){
        try {
            return await bookingModel.create(postBooking)
        } catch (error) {
            console.log(error);
        }
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