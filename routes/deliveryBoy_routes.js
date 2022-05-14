const express = require("express")
const{createDeliveryBoy,getDeliveryBoy,deleteDeliveryBoy,updateDeliveryBoy}=require("../controller/delivery_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/createDeliveryBoy").post(upload.single('file'),createDeliveryBoy )
// route http://192.168.43.220:5000/api/v1/createDeliveryBoy
//method post
router.route("/getDeliveryBoy").get(getDeliveryBoy)
// route http://192.168.43.220:5000/api/v1/getDeliveryBoy
//method get
router.route("deleteDeliveryBoy/:id").delete(deleteDeliveryBoy)
// route http://192.168.43.220:5000/api/v1/deleteDeliveryBoy/:id
//method delete
router.route("updateDeliveryBoy/:id").put(updateDeliveryBoy)
// route http://192.168.43.220:5000/api/v1/updateDeliveryBoy/:id
//method put

module.exports = router 