const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { verifyToken } = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");
router
    .post("/signup", userController.signup)
    .post("/login", userController.login)
    .patch("/seller",verifyToken,authorization("admin" ),  userController.seller)
    .post("/me", verifyToken, userController.getMe)
   
    
router
    .get("/seller",verifyToken,authorization("admin" ), userController.sellerGet)
    .delete("/seller/:id", verifyToken,authorization("admin"),  userController.sellerDelete)
   
    
module.exports = router;