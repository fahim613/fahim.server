const express= require("express");

const productController= require("../controller/product.controller"); 
const authorization  = require("../middleware/authorization");
const upload = require("../middleware/uploader");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();
//i create the product route 
router
 .route("/product") 
 .get(  productController.getProduct)
 .post( verifyToken, authorization("seller","admin"), upload.single("pic"), productController.createProduct)
 router
 .route("/product/:id")
 .get(productController.getProductById)
 .delete(  verifyToken,authorization("seller","admin"), productController.deleteProductById)
module.exports = router;