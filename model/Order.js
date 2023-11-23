const mongoose = require("mongoose");
  
const orderSchema = mongoose.Schema(
  {
  
  address: {
      type: String,
    
    },
    name: {
      type: String,
      
    },
    phone: {
      type: String,
      
    },
    id: {
      type: String,
      
    },
    pic: {
      type: String,
      
    },
    pname: {
      type: String,
      
    },
    price: {
      type: Number,
      
    },

 
  },
  {
    timestamps: true,
  }
);

 
 
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;