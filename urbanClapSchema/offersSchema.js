const mongoose = require('mongoose');

/*
        ---- offers schema contains ------
        all the applicable offers at present
*/

const offersSchema = new mongoose.model({
    offers: [
        {
            serviceID: {
                type: String,
                required: [true, 'Service id required']
            },
            partnerID: {
                type: String,
                required: [true, 'Partner id required']
            },
            subServiceID: {
                type: String,
                required: [true, 'Sub Service id required']
            },
            minPurchase: 1000,
            offerPercent: 10,
            duration: {
                type: Date,
                default: Date.now(),
                required: true
            }
        }
    ]
});
