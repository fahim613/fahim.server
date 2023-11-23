const express= require("express");

const orderController= require("../controller/order.controller"); 
const { verifyToken } = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");
 
const router = express.Router();
// image uploader try code 
router
 .route("/order")
 .post( verifyToken, orderController.createOrder) 
 .get( orderController.getOrder)
 router
 .route("/order/:id")
 .delete(verifyToken,authorization("admin","seller"),orderController.deleteOrderById) 
module.exports = router;