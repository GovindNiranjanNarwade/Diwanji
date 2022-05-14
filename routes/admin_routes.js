const express = require("express")

const {getAdmin} =require("../controller/admin_controller")
const protector = require("../middleware/admin_middleware")

const router = express.Router()


router.route("/admin").get(protector, getAdmin)
// @url => http://192.168.43.220:5000/api/v1/admin
// @method => GET


module.exports = router