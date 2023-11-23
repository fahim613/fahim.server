 const express = require('express');
 const cors = require("cors");
const app = express();
app.use(express.json()); 
app.use(cors())
app.use("/images",express.static("images"))
app.use(express.urlencoded({ extended: true }))
const productRoute = require('./routes/product.routes');
const userRoute = require('./routes/user.routes');
const orderRoute = require('./routes/order.routes');
    app.use("/api/v1/",orderRoute)
    app.use("/api/v1/",productRoute)
    app.use("/api/v1", userRoute);
 
module.exports = app;