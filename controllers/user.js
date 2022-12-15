const { request, response } = require("express");
const userModel=require("./../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')




const register = async (request,res) => {
    try {
        const errors = validationResult(request)
        if (!errors.isEmpty()){ 
             return res.status(400).json({ errors: errors.mapped() })
        }    
        const {userName,mailAdress,password,age,gender,job} = request.body
        
        const user=await userModel.findOne({mailAdress})
        console.log(user)
        if (user){
            console.log("user mawjoud!")
            return res.status(401).json({ errors: [{ msg: 'User Exist !' }] })
        }  

        const newUser = new userModel({
            userName: userName,
            mailAdress : mailAdress,
            age : age,
            gender : gender,
            job : job
        })
        console.log(newUser)

        const hash = await bcrypt.hash(password, 12)
        newUser.password = hash

        let result= await userModel.create(newUser)
        response.send(result)

    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: [{ msg: error.message }] })
    }
}


const login = async(request,res) => {
    try {
        const errors = validationResult(request)
        if (!errors.isEmpty()){
            console.log("aandek erreur")
            return res.status(400).json({ errors: errors.mapped() })
        }
        
        const {mailAdress,password} = request.body
        const user=await userModel.findOne({mailAdress})
        console.log(user)

        if (!user){
            console.log("register first")
            return res.status(404).json({ errors: [{ msg: 'please register before' }] })
        } 
        
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            console.log("password ghalet")
            return res.status(404).json({ errors: [{ msg: 'wrong password' }] })
        }
      
        
        const token = await jwt.sign({id:user._id} , "secret",{expiresIn:"24h"})  
        res.cookie('token',token)

        return res.status(200).json({token,user})

    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: [{ msg: error.message }] })
    }
}


const me = async(request,response)=>{
    response.send(request.user)
}



const getInscription = async(request,response)=>{
    let user_found =await userModel.find()
    response.send( user_found)
}


const getByIdInscription = async (request, response) => {
    let result = await userModel.findById(request.params.id)
    response.send(result)
}



const putManyInscription = async (request, response) => {
    const body = request.body
    let result =await userModel.updateMany ({ _id: { $in: body.ids } }, body.input)
    console.log(" userss updated")
    response.send(result)
}

const putByIdInscription = async (request,response)=>{
    const input = request.body
    console.log("params",request.params)
    console.log("querie",request.query)
    let user_updated = await userModel.findByIdAndUpdate(request.params.id,input, {
        new : true,
    })
    response.send(user_updated)
}



const deleteManyInscription = async(request,response)=>{
    const body = request.body
    let result= await userModel.deleteMany({ _id: { $in: body.ids } })
    console.log("users deleted")
    response.send(result)
}

const deleteByIdInscription =async (request,response)=>{
    let user_deleted = await userModel.findByIdAndDelete(request.params.id) 
  
    response.send(user_deleted)

}

const userController = {
    register,
    login,
    getInscription,
    getByIdInscription,
    putManyInscription,
    putByIdInscription,
    deleteManyInscription,
    deleteByIdInscription,
    me
}

module.exports = userController