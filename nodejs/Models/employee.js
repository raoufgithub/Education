const mongoose = require('mongoose');

const schemaEmployee = mongoose.Schema({
    familyName : String,
    firstName : String,
    dateBirthDay : Date,
    dateOfRecriutment : Date,
    
});

const employee = mongoose.model('employee', schemaEmployee);

module.exports = employee;