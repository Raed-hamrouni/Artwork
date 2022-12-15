const express = require ("express");
const { gettraitement} = require("../controllers/category");
var route = express.Router()

const controller = require("../controllers/category");

route.get("/category/api/get",controller.gettraitement) 
route.delete("/category/api/delete",controller.deletetraitement) 
route.post("/category/api/post",controller.posttraitement) 
route.put("/category/api/put/:id",controller.puttraitement) 


module.exports = route