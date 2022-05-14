const mongoose = require("mongoose")
const deliveryBoySchema = mongoose.Schema({
    Title:{
        type:String,    
    },
    FullName:{
        type:String,    
    },
   
    DOB:{
type:Date
    },
    Gender:{
        type:String
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

    number:{
        type:Number,
        
    },
    file:{
        type:String,
    },



},{
timestamps:true
})
module.exports = mongoose.model("deliveryBoy",deliveryBoySchema)