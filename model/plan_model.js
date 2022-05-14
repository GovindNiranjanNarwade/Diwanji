const mongoose = require("mongoose")

const planSchema = mongoose.Schema({
    PlanName:{
        type:String,
        
    },
    Price:{
        type:Number,
        required:true
    },
  DisCount:{
      type:Number
  },


},{
timestamps:true
})
module.exports = mongoose.model("plan",planSchema)