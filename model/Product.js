const mongoose = require("mongoose");
 
const ProductSchema = mongoose.Schema({
    name: {
        type: String,

    },
    price: {
        type: Number,

    },
    description: {
        type: String,

    },
    pic:
        { type: [String] },
    category: {     
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Product = new mongoose.model("Product", ProductSchema
);
module.exports = Product;