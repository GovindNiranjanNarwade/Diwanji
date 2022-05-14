const express = require("express")

const {createPlan,getPlan,deletePlan} =require("../controller/plan_controller")

const router = express.Router()
router.route("/createplan").post(createPlan)
 // route http://192.168.43.220:5000/api/v1/createplan
router.route("/getplan").get( getPlan)
 // route http://192.168.43.220:5000/api/v1/getplan
 router.route("/delete/:id").delete(deletePlan)
 // route http://192.168.43.220:5000/api/v1/delete


module.exports = router