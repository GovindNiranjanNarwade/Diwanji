const mongoose = require("mongoose")

const paymentSchema = mongoose.Schema({
    PaidFor:{
        type:String,
        
    },
    TransectionId:{
        type:Number,
        required:true
    },
  Date:{
      type:Date
  },


},{
timestamps:true
})
module.exports = mongoose.model("payment",paymentSchema)