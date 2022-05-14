const mongoose = require("mongoose")

const hotelDataSchema = mongoose.Schema({
    HotelName:{
        type:String,
        
    },
    HotelEmail:{
        type:String,
        
    },
    HotelAddress:{
        type:String
    },
    HotelLocation:{
type:String
    },
     Cuisines:{
        type:String
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
   
        HotelContact:{
        type:Number,
        
    },

   Date:{
       type:Date
   },
   
    file:{
        type:String,
    },
},{
timestamps:true
})
module.exports = mongoose.model("hotelInformation",hotelDataSchema)