const mongoose = require('mongoose');

const schemaPost = mongoose.Schema({
    postName : String,
    
});

const post = mongoose.model('post', schemaPost);

module.exports = post;