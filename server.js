
const express = require("express")
const ArtWorkRouter= require("./routers/ArtWork")
const UserRouter=require("./routers/user")
const CategoryRouter=require("./routers/category")
require("./DB/connexion")
var server = express()
var port=5007


server.use(express.json())
server.use(ArtWorkRouter)
server.use(UserRouter)
server.use(CategoryRouter)


server.listen(port,()=>{
console.log(`serverk yemchi port: ${port}`)
})