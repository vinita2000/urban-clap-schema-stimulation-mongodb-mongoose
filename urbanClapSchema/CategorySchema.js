const mongoose = require('mongoose');

/*
    ---- category schema contains ----
    category id 
    and array of services related to that respective category
*/

const categoriesSchema = new mongoose.model({
    categoryID: String,
    name: String,
    services: [{
        serviceID: String,
        name: String
    }],
    description: {
        type: String,
        required: [true, 'Service description required'],
        trim: true
    }
});