

const { request } = require("express");
const ArtWorkModel = require("./../models/ArtWork")

const postTraitement = (request, response) => {
    const input = request.body
    let ArtWork = new ArtWorkModel({ Title: input.title, description: input.description, prix: input.prix, category: input.category, image: input.image })
    ArtWorkModel.create(ArtWork);
    response.send(ArtWork)
}

const getAllTraitement = async (request, response) => {
    let result = await ArtWorkModel.find()
    response.send(result)
}


const getByIdTraitement = async (request, response) => {
    let result = await ArtWorkModel.findById(request.params.id)
    response.send(result)
}


const putManyTraitement = async (request, response) => {
    const body = request.body
    let result =await ArtWorkModel.updateMany ({ _id: { $in: body.ids } }, body.input)
    console.log(" documents updated")
    response.send(result)
}

const putByIdTraitement = async (request, response) => {
    const input = request.body
    let result =await ArtWorkModel.findByIdAndUpdate ( request.params.id, input, {new : true})
    console.log("1 document updated")
    response.send(result)
}



const deleteManyTraitement = async(request,response)=>{
    const body = request.body
    let result= await ArtWorkModel.deleteMany({ _id: { $in: body.ids } })
    console.log("documents deleted")
    response.send(result)
}

const deleteByIdTraitement = async(request, response) => {
    console.log(("params",request.params))
    console.log(("query",request.query))
    let result =await ArtWorkModel.findByIdAndDelete ( request.params.id, {new : true})
    console.log("1 document deleted")
    response.send(result)
}



const ArtWorkController = {
    getAllTraitement,
    putByIdTraitement,
    deleteByIdTraitement,
    postTraitement,
    getByIdTraitement,
    putManyTraitement,
    deleteManyTraitement
}


module.exports = ArtWorkController