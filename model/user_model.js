const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userId:{
        type:String,
        
    },
    Firstname:{
        type:String,
        
    },
    Lastname:{
        type:String,
       
    },
    Email:{
        type:String,
        
    },
 
        City:{
            type:String,
        },
        Pincode:{
            type:Number,
        },
        State:{
            type:String,
        },
        Country:{
            type:String,
        },
   
        Mobile:{
        type:Number,
        
    },
    otp:{
        type:String,
        
    },
   Date:{
       type:Date
   },
   
    file:{
        type:String,
    },
    expireIn:{
        type:Number
    }

},{
timestamps:true
})
module.exports = mongoose.model("user",userSchema)