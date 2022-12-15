const mongoose = require ("mongoose")
var uri = "mongodb+srv://admin:admin@cluster0.qf2tzzr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri,(error)=>{
    if(error){
        console.log("error in db connexion : ", error)
    }else{
        console.log("connect to DB")
    }
})