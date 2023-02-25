const mongoose = require('mongoose');

const schemaParentStudent = mongoose.Schema({
    familyName : String,
    firstName : String,
    dateBirthDay : date,
    
});

const parentStudent = mongoose.model("parentStuden", schemaParentStudent);


module.exports = parentStudent;