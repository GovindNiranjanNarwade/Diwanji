const express = require("express")
const { payment,verifyPayment} = require("../controller/payment_controller");
  const  userprotector  = require("../middleware/admin_middleware");
const router = express.Router()

  router.route("/payment").post( payment);
  // http://192.168.43.220:5000/api/v1/payment
 
  router.route("/payment/verify").post(userprotector, verifyPayment);
  // http://192.168.43.220:5000/api/v1/payment/verify

module.exports = router
