const express = require('express')

const{getAllCart,createCart,deleteCart,updateCart,getsingleCart}=require("../controller/addToCart_controller")
const router = express.Router()
router.route("/getcart").get(getAllCart);
// route http://192.168.43.220:5000/api/v1/cart/getcart
router.route("/addcart").post(createCart);

// route http://192.168.43.220:5000/api/v1/cart/addcart
router.route("/cart/:id").delete(deleteCart).put(updateCart).get(getsingleCart);
// route http://192.168.43.220:5000/api/v1/cart/:id

module.exports =router