const express=require("express")
var route=express.Router()
const ArtWorkController=require("./../controllers/ArtWork")
var MiddlewareAuth =require("./../middlewares/auth")

route.post("/artwork/api/post",MiddlewareAuth,ArtWorkController.postTraitement)   
 
route.get("/artwork/api/get",MiddlewareAuth,ArtWorkController.getAllTraitement)

route.get("/artwork/api/get/:id",MiddlewareAuth,ArtWorkController.getByIdTraitement)  

route.put("/artwork/api/put/:id",MiddlewareAuth,ArtWorkController.putByIdTraitement)

route.put("/artwork/api/put",MiddlewareAuth,ArtWorkController.putManyTraitement)   

route.delete("/artwork/api/delete/:id",MiddlewareAuth,ArtWorkController.deleteByIdTraitement)    

route.delete("/artwork/api/delete",MiddlewareAuth,ArtWorkController.deleteManyTraitement)   

module.exports=route


