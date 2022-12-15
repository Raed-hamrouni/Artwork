const mongoose = require ("mongoose")

const artwork=new mongoose.Schema(
    {   
        nom :{type:String},  
    },
    {timestamps:true}
);

const category =  mongoose.model("artwork",artwork)

module.exports = category ;