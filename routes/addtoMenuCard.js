const express = require("express")
const{CreateAddMenuCard,getMenuCard,DeleteMenuCard,updateMenuCard}=require("../controller/addHotelMenuCard_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/CreateAddMenuCard").post(upload.single('file'), CreateAddMenuCard)
// route http://192.168.43.220:5000/api/v1/CreateAddMenuCard
//method post
router.route("/getMenuCard").get(getMenuCard)
// route http://192.168.43.220:5000/api/v1/getMenuCard
//method get
router.route("/DeleteMenuCard/:id").delete(DeleteMenuCard)
// route http://192.168.43.220:5000/api/v1/DeleteMenuCard
//method delete
router.route("/updateMenuCard/:id").put(updateMenuCard)
// route http://192.168.43.220:5000/api/v1/updateMenuCard
//method put


module.exports = router 