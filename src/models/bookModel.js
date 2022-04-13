const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    prices:{
        indianPrice:String,
        europrice:String
    },
    Year:{type:Number,default:2021},
    tags: [String],
    authorName: String, 
    toatlPages:Number,
    stockAvailable:Boolean,
    isPublished: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 