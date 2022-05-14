const express = require("express");
const{createCategory,getCategory,deleteCategory}=require("../controller/category_controller")
const router = express.Router();
router.route("/category").post(createCategory)
// route http://192.168.43.220:5000/api/v1/category
router.route("/getcategory").get(getCategory)
// route http://192.168.43.220:5000/api/v1/getcategory
router.route("/deleteCategory/:id").delete(deleteCategory)
// route http://192.168.43.220:5000/api/v1/deleteCategory
module.exports = router
 