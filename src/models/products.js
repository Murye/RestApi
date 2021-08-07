const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    productName: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = model('Product', ProductSchema)
module.exports = Product;