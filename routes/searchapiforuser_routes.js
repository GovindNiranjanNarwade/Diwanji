const express = require("express")
const{SearchuserByName}=require("../controller/searchApiforUser_controller")
const router = express.Router()


router.route("/SearchuserByName/:Firstname").get(SearchuserByName)
// route http://192.168.43.220:5000/api/v1/SearchuserByName
//method get

module.exports = router 