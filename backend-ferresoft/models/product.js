const mongoose = require('mongoose');
const Schema = mongoose.Schema;

productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priceBuy: {
        type: Number,
        required: true
    },
    priceSale: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    //imagen de producto defecto
    image: {
        type: String,
        default: 'https://thumbs.dreamstime.com/b/icono-transparente-del-producto-dise%C3%B1o-s%C3%ADmbolo-comercio-electr%C3%B3nico-c-130319042.jpg'
    },
    stock: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);