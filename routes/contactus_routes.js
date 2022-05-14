const express = require("express")
const{createContactus,getContactus}=require("../controller/contactus_controller")
const router = express.Router()
router.route("/createContactus").post(createContactus)
// route http://192.168.43.220:5000/api/v1/createContactus
//method post
router.route("/getContactus").get(getContactus)
// route http://192.168.43.220:5000/api/v1/getContactus
//method get


module.exports = router 