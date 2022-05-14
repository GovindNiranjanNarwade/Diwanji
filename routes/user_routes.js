const express = require("express")
const{createUser,getUser,deleteUser,updateUser,SingleUser}=require("../controller/user_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/createuser").post(upload.single('file'), createUser)
// route http://192.168.43.220:5000/api/v1/user/createuser
//method post
router.route("/getuser").get(getUser)
// route http://192.168.43.220:5000/api/v1/user/getUser
//method get
router.route("/deleteUser/:id").delete(deleteUser)
// route http://192.168.43.220:5000/api/v1/user/deleteUser
//method delete
router.route("/updateUser/:id").put(updateUser)
// route http://192.168.43.220:5000/api/v1/user/updateUser
//method put
router.route("/SingleUser/:id").get(SingleUser)
// route http://192.168.43.220:5000/api/v1/user/SingleUser
//method put

module.exports = router 
