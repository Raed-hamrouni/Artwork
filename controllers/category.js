
const category = require("../models/category")

const gettraitement = async (request,response)=>{
    let result = await category.find()
    console.log(result)
    response.send(result)
}
const deletetraitement = async (request,response)=>{
    const input = request.body
    let result= await category.deleteMany(input)
    console.log("documents deleted")
    response.send("deleted")
}
const posttraitement = (request,response)=>{
    
    const input = request.body
    let artwork = new category ({nom : input.nom});
    category.create(artwork)
    response.send(artwork)
   
}
const puttraitement = async (request,response)=>{
    let input = request.body
    console.log("params", request.params)
    console.log("queries", request.query)
    let result = await category.findByIdAndUpdate(request.params.id , input, {new : true})
    console.log("updated succefully")
    response.send(result)
}

const controller ={
    gettraitement,
    deletetraitement,
    posttraitement,
    puttraitement
};

module.exports = controller;