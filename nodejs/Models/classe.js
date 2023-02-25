const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    className : String,
    
});
const classe = mongoose.model('classe', classSchema);



module.exports = classe;