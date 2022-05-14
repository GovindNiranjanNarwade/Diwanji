const express = require("express")
const HotelLogin =require("../controller/hotellogin_controller")
const router = express.Router()
router.route("/hotellogin").post( HotelLogin)
// route http://192.168.43.220:5000/api/v1/hotellogin


module.exports = router