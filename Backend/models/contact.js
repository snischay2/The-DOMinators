const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required:true
    },
    emailid: {
        type: String,
        required:true
    },
    anymessage: {
        type: String,
        required:true
    }

});
module.exports = mongoose.model('Contact', contact);