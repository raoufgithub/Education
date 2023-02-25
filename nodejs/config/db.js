const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.set('strictQuery', true);
const connectDB = async() => {
    try{
        console.log("before process env");
        console.log(process.env.MONGO_CONNECTIONSTRING);
        console.log("after process env");
        const conn = await mongoose.connect(process.env.MONGO_CONNECTIONSTRING);
        console.log("mongoDB connected");

    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;