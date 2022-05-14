const express = require("express")
const{createHotelRegistration,getHotelRegistration,DeleteHotelRegistration,UpdateHotelRegistration,getSingleHotelRegistration}=require("../controller/HotelRegister_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/createHotelRegistration").post(upload.single('file'), createHotelRegistration)
// route http://192.168.43.220:5000/api/v1/createHotelRegistration
//method post
router.route("/getHotelRegistration").get(getHotelRegistration)
// route http://192.168.43.220:5000/api/v1/getHotelRegistration
//method get
router.route("/DeleteHotelRegistration/:id").delete(DeleteHotelRegistration)
// route http://192.168.43.220:5000/api/v1/DeleteHotelRegistration
//method delete
router.route("/UpdateHotelRegistration/:id").put(UpdateHotelRegistration)
// route http://192.168.43.220:5000/api/v1/UpdateHotelRegistration
//method put
router.route("/getSingleHotelRegistration/:id").get(getSingleHotelRegistration)
// route http://192.168.43.220:5000/api/v1/getSingleHotelRegistration
//method put

module.exports = router 