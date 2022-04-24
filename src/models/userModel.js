const mongoose = require('mongoose');

const userS = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
   isDeleted:{type:Boolean,default:false},
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('login1', userS)
