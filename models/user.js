const mongoose = require("mongoose");

const user = mongoose.Schema({
    userName :{type:String},
    mailAdress :{
        type:String,
        // required:true,
        // unique:true
    },
    password: {
        type: String,
        // required: true
    },
    age : {type:Number},
    gender :{type: String},
    job :{type: String},
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
})
const userModel = mongoose.model("user", user);
module.exports = userModel;
