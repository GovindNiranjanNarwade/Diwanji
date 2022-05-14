const mongoose = require("mongoose")
const categorSchema = mongoose.Schema({
  name:{
      type:String
  },
  slug:{
      type:String
  },
  parentId:{
      type:String
      
  }
  
   
},{
timestamps:true
})
module.exports = mongoose.model("category",categorSchema)