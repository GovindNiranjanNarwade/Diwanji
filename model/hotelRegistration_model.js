const mongoose = require("mongoose")
const hotelRegistrationSchema = mongoose.Schema({
    HotelOwnerName:{
        type:String,
        
    },
    HotelName:{
        type:String,
        
    },
    HotelOwnerEmail:{
        type:String,
        
    },

    HotelOwnerPassword:{
        type:String,
        
    },

    HotelOwnerCity:{
            type:String,
        },
        HotelOwnerPincode:{
            type:Number,
        },
        HotelOwnerState:{
            type:String,
        },
        HotelOwnerCountry:{
            type:String,
        },
   
        HotelOwnerContact:{
        type:Number,
        
    },
    otp:{
type:String
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
module.exports = mongoose.model("hotelRegistration", hotelRegistrationSchema)
