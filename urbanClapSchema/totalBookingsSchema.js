const mongoose = require('mongoose');

/*
    ---- total booking schema has -----
    the total booking till date and the profit and loss of the company
*/

const totalBookingsSchema = new mongoose.model({
    bookingCount: {
        type: Number,
        required: true
    },
    profits: {
        type: Number,
        required: true
    },
    loss: {
        type: Number,
        default: 0
    }
});
