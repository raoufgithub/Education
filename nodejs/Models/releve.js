const mongoose = require('mongoose');

const schemaReleve = mongoose.Schema({
    studentId : String,
    periodeReleve : String,
});

const  releve = mongoose.model('releve', schemaReleve);


module.exports = releve;