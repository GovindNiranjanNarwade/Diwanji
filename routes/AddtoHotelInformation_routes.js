const express = require("express")
const{addHotelInformation,getHotelInformation,getSingleHotelInformation,updateHotelInformation,deleteHotelInformation,SearchHotelByName}=require("../controller/addHotelInformation_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/addHotelInformation").post(upload.single('file'),addHotelInformation )
// route http://192.168.43.220:5000/api/v1/addHotelInformation
//method post
router.route("/getHotelInformation").get(getHotelInformation)
// route http://192.168.43.220:5000/api/v1/getHotelInformation
//method get
router.route("/deleteHotelInformation/:id").delete(deleteHotelInformation)
// route  http://192.168.43.220:5000/api/v1/deleteHotelInformation/id
//method delete
router.route("/updateHotelInformation/:id").put(updateHotelInformation)
// route http://192.168.43.220:5000/api/v1/updateHotelInformation/id
//method put
router.route("/getSingleHotelInformation/:id").get(getSingleHotelInformation)
// route http://192.168.43.220:5000/api/v1/getSingleHotelInformation/id
//method get
router.route("/SearchHotelByName/:HotelName").get(SearchHotelByName)
// route http://192.168.43.220:5000/api/v1/SearchHotelByName/HotelName
//method get

module.exports = router 