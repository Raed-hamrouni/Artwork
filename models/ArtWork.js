const mongoose=require("mongoose")

const ArtWork=new mongoose.Schema(
    {  
        Title:{type:String},
        category:{type:String},
        description:{type:String},
        prix:{type:Number},
        image:{type:String}
    },
    {timestamps:true}
);

const ArtWorkModel= mongoose.model("ArtWork",ArtWork)

module.exports= ArtWorkModel