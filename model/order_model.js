const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    paymentId: {
      type: String,
    },
    file: {
      type: String,
    },
    mode: {
      type: String,
      required: true,
      enum: ["cod", "online"],
    },
    deliveredAddress: {
      type:String,
      default: false,
    },
    pickupAddress: {
      type: String,
      default: false,
    },
    productsId:{
      type: mongoose.Types.ObjectId,
          ref: "product",
          required: true,
    }, 
        qty: {
          type: Number,
          required: true,
        },
      
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("order", orderSchema);