const mongoose = require("mongoose");

const ticketModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'iPad', 'iMac', 'Macbook Pro']
    },
    description: {
        type: String,
        required: [true, 'Please add description!']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Ticket', ticketModel)