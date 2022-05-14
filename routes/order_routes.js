const express = require("express")
const{createOrderDetails,getOrderDetails,deleteOrderDetails,getSingleOrderDetails}=require("../controller/order_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/createOrderDetails").post(upload.single('file'),createOrderDetails )
// route http://192.168.43.220:5000/api/v1/createOrderDetails
//method post
router.route("/getOrderDetails").get(getOrderDetails)
// route http://192.168.43.220:5000/api/v1/getOrderDetails
//method get
router.route("getOrderDetails/:id").delete(deleteOrderDetails)
// route http://192.168.43.220:5000/api/v1/getOrderDetails/:id
//method delete
router.route("getSingleOrderDetails/:id").get(getSingleOrderDetails)
// route http://192.168.43.220:5000/api/v1/getSingleOrderDetails/:id
//method delete


module.exports = router