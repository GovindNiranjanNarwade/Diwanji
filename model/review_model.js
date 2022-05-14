const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    userName:{
        type:String,
        required:true
        
    },
    userContactNumber:{
        type:Number,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userreview:{
        type:String,
        required:true
  }


},{
timestamps:true
})
module.exports = mongoose.model("review",reviewSchema)