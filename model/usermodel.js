const { model } = require('mongoose');
const mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    contact:{
        type: String
    }
})
module.exports = mongoose.model('userdata',userschema)
