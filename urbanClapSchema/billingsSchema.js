const mongoose = require('mongoose');

/*
    --- billings schema contains ----
    all the billings with customerID, serviceID, partnerID
    with amount paid, companyCut, and payment time 
*/

const billingsSchema = new mongoose.model({
    billings = [
        {
            customerID: {
                type: String,
                required: [true, 'Customer id required']
            },
            serviceID: {
                type: String,
                required: [true, 'Service id required']
            },
            partnerID: {
                type: String,
                required: [true, 'Partner id required']
            },
            paidAt: {
                type: Date,
                required: [true, 'Date required']
            },
            amount: {
                type: Number,
                required: true
            },
            companyCut: { // in precentage
                type: Number,
                default: 10
            }
        }
    ]
});
