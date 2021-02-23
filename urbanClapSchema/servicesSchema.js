const mongoose = require('mongoose');

/*
    ---- service schema contains ----
    service id
    category id (to which category the service belongs to like 'Spa' belongs to 'Beauty and Health')

*/

const servicesSchema = new mongoose.model({
    serviceID: {
        type: String,
        required: [true, 'Service ID required'],
        unique: true,
        trim: true
    },
    CategoryID: {
        type: String,
        required: [true, 'Category ID required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Service description required'],
        trim: true
    },
    partnerID: [{
        type: String,
        required: [true, 'Partner ID required']
    }]
});