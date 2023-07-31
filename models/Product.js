/**
 author : Menaka Lakshan
 created : 27/07/2023
 */

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
        },
        productName: {
            type: String,
            max: 500,
        },
        imgUrl: {
            type: String,
        },
        itemPirce: {
            type: Number,
            default: 0.00,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
