const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:String,
    author_id:{required:true,type:Number},
    prices:Number,
    ratings:Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 