const express = require("express")
const{MobileNumberSend,UserLogin}=require("../controller/userloginwithmobilenumber")
const router = express.Router()
router.route("/MobileNumberSend").post(MobileNumberSend)
// http://192.168.43.220:5000/api/v1/MobileNumberSend
router.route("/UserLogin").post(UserLogin)
// http://192.168.43.220:5000/api/v1/UserLogin


module.exports=router