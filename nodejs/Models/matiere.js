const mongoose = require('mongoose');

const schemaMatiere = mongoose.Schema({
    matiereName : String,
    
});

const matiere = mongoose.model("matiere", schemaMatiere);
module.exports = matiere;