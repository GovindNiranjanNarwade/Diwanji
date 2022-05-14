const express = require("express")
const{addProduct,getAllProducts,getSingleProduct,deleteProduct}=require("../controller/product_controller")
const upload = require("../middleware/uploads_middleware")
const router = express.Router()
router.route("/addProduct").post(upload.single('file'),addProduct )
// route http://192.168.43.220:5000/api/v1/addProduct
//method post
router.route("/getAllProducts").get(getAllProducts)
// route http://192.168.43.220:5000/api/v1/getAllProducts
//method get
router.route("/deleteProduct/:id").delete(deleteProduct)
// route http://192.168.43.220:5000/api/v1/deleteProduct
//method delete
router.route("/getSingleProduct/:id").get(getSingleProduct)
// route http://192.168.43.220:5000/api/v1/getSingleProduct
//method delete


module.exports = router