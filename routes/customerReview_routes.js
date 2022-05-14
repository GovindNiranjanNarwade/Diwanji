const express = require("express")
const{createReviewDetails,getReviewDetails,deleteReviewDetails}=require("../controller/customerReview_controller")
const router = express.Router()
router.route("/createReviewDetails").post(createReviewDetails )
// route http://192.168.43.220:5000/api/v1/createReviewDetails
//method post
router.route("/getReviewDetails").get(getReviewDetails)
// route http://192.168.43.220:5000/api/v1/getReviewDetails
//method get
router.route("/deleteReviewDetails/:id").delete(deleteReviewDetails)
// route http://192.168.43.220:5000/api/v1/deleteReviewDetails
//method delete


module.exports = router 