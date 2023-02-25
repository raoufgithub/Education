const mongoose = require('mongoose');

const schemaStudent = mongoose.schema({
    familyName : String,
    firstName : String,
    dateBirthDay : date,
    placeBirthDay : String,
    
});

const student = mongoose.model('student', schemaStudent);

module.exports = student;