const express = require("express")
var route = express.Router()
const userController = require("./../controllers/user")
var middleware = require("./../middlewares/datacheck")
var MiddlewareAuth =require("./../middlewares/auth")

route.post("/user/api/register", userController.register) 

route.post("/user/api/login",middleware, userController.login)

route.post("/user/api/me",MiddlewareAuth,userController.me)

route.get("/user/api/get", userController.getInscription) 

route.get("/user/api/get/:id", userController.getByIdInscription)

route.put("/user/api/put",userController.putManyInscription)

route.put("/user/api/put/:id", userController.putByIdInscription) 

route.delete("/user/api/delete/:id", userController.deleteByIdInscription) 

route.delete("/user/api/delete",userController.deleteManyInscription)

module.exports = route