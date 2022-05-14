const express = require("express")
const{createEnquiry,getEnquiry,deleteEnquiry}=require("../controller/enquiry_controller")
const router = express.Router()
router.route("/createEnquiry").post(createEnquiry)
// route http://192.168.43.220:5000/api/v1/createEnquiry
//method post
router.route("/getEnquiry").get(getEnquiry)
// route http://192.168.43.220:5000/api/v1/getEnquiry
//method get
router.route("/deleteEnquiry/:id").delete(deleteEnquiry)
// route http://192.168.43.220:5000/api/v1/deleteEnquiry
//method delete


module.exports = router 