const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    CategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
   ProductName:{
        type:String,
       
    },
    WeightQty:{
        type:Number,
        min: [1, 'Quantity can not be less then 1.']

       
    },
    Price:{
        type:Number,
        min: [1, 'Price can not be less then 1.']

       
    },
    Address:{
        type:String,
       
    },
    Message:{
        type:String,
       
    },
   
    Pincode:{
        type:String,
        
    },
    file:{
        type:String,
    },


},{
timestamps:true
})
module.exports = mongoose.model("product",productSchema)