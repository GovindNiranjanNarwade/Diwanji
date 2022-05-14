const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true
},
cartItems:[
    {
        productID:{type:mongoose.Schema.Types.ObjectId,
        ref:'hotelbookings',
        required:true
    },
    quantity:{
        type:Number,
        default:0,
        
    },
    price:{type:String,
    required:true }
    }
]
},{timestamps:true});
module.exports= mongoose.model('cart',cartSchema)