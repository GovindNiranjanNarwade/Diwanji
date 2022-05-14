const mongoose = require("mongoose")

const contactUsSchema = mongoose.Schema({
    FullName:{
        type:String,
        
    },
    Email:{
        type:String,
       
    },
    Mobile:{
        type:String,
        
    },
    Subject:{
        type:String,
        
    },
    Message:{
        type:String,
        
    },
},{
timestamps:true
})
module.exports = mongoose.model("contact",contactUsSchema)