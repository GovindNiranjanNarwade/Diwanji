const mongoose = require('mongoose');
const menucardSchema = mongoose.Schema({
    ProductName:{
        type:String
    },
    AverageRate:{
        type:String
    },
    file:{
        type:String
    },
    Price:{
        type:Number,
    }

},{timestamps:true});
module.exports= mongoose.model('menuCard',menucardSchema)