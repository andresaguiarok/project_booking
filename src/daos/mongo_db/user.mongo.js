const { userModel } = require('../models/user.model.js');

class UserDao {

    async get(){
        try {
            return await userModel.find();
        } catch (error) {
            console.log(error);
        }
    };

    async getID(data){
        try {
            console.log(data);
            return await userModel.findOne(data);
        } catch (error) {
            console.log(error);
        }
    };

    async post(){};
    async update(){};
    async deleteID(){};
    async delete(){};
};

module.exports = {
    UserDao
};