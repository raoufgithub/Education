const mongoose = require('mongoose');

const schemaField = mongoose.Schema({
    fieldName : String,
});

const field = mongoose.model('field',schemaField);

module.exports = field;