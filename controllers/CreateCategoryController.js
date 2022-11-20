const prismaClient = require("../database/prismaClient");

module.exports = class CreateCategoryController{

  async handle(req,res){
    const {name} = req.body;
 
 const category = await prismaClient.category.create({
  data:{
    name 
  }

 })
 return res.json(category)
  }

} 

   
