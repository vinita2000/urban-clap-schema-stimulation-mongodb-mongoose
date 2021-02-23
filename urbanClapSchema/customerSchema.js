const mongoose = require('mongoose');
const validator = require('validator');

/*
    ----- Here is the overview of what is inside the customer schema -----
    customer personal details - 1. name
                                2. username
                                3. email
                                4. password
                                5. address
                                6. mobile number
                                7. card details 
                where 1-6 are required and 7 is optional
    
    customer favorites - service and the respective partner (since service <-> partners(service providers))
                                                                        (many-to-many)
    customer bookings - Booking history of the customer
            
*/

const customerSchema = new mongoose.model({
    customerID: {
        type: String,
        required: [true, 'ID required'],
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name required'],
        trim: true,
        validate(value) {
            if (! validator.isAlpha(value)) {
                throw new Error('Name not valid');
            }
        }
    },
    username: {
        type: String,
        required: [true, 'Username required'],
        trim: true,
        unique: true,
        maxlength: [30, 'Too lengthy username'],
        minlength: [5, 'Too small username'],
        validate(value) {
            if (! validator.isAlphanumeric(value)) {
                throw new Error('Name not valid');
            }
        }
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        unique: true,
        trim: true,
        validate(value) {
            if (! validator.isEmail(value)) {
                throw new Error('Email not valid');
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password required'],
        trim: true,
        minlength: [7, 'Too small Password'],
        validate(value) {
            if (value.lowerCase().includes('password')) {
                throw new Error(`Cannot include "PASSWORD" in the password`);
            }
        }
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        pincode: {
            type: Number,
            required: true,
            trim: true,
            validate(value) {
                if (! validator.isPostalCode(value)) {
                    throw new Error(`Not a valid Pin Code`);
                }
            }
        }
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
            if (! validator.isMobilePhone(value)) {
                throw new Error('Mobile number not valid');
            }
        }
    },
    // card details is not mandatory since customer can pay via cash, net banking or UPI,
    cardDetails: Number,
    favorites: {
        services: [
            {
                serviceID: String,
                partnerID: Number
            }
        ]
    },
    bookings: {
        services: [
            {
                serviceID: String,
                partnerID: {
                    type: String,
                    subServices: [{
                        subServiceID: {
                            type: String,
                            required: [true, 'Sub service ID required']
                        }
                    }]
                },
                status: String, // completed, ongoing, upcoming
                feedback: {
                    type: String,
                    default: null
                },
                rating: {
                    type: Number, // out of 10
                    default: 10,
                    min: [0, 'Rate between 0-10'],
                    max: [10, 'Rate between 0-10']
                }
            }
        ]
    }
});
