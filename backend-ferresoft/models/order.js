const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    order_id: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    order_status: {
        type: String,
        required: true
    },
    order_total: {
        type: Number,
        required: true
    },
    order_details: {
        type: Array,
        required: true
    },
    order_user: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Order', OrderSchema);


// Language: javascript