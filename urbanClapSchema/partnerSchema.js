const mongoose = require('mongoose');
const validator = require('validator');

/*
    ----- Here is the overview of what is inside the partner schema -----
    partner details - 1. name
                                2. username
                                3. email
                                4. password
                                5. address
                                6. mobile number
                                7. card details 
                where 1-6 are required and 7 is optional
    
    ServiceID
    CategoryID
    List of subServices offered
    List of Bookings 
    partnerStatus(whether partner is currently offering services or not)
*/

const partnerSchema = new mongoose.model({
    partnerID: {
        type: String,
        required: [true, 'ID required'],
        trim: true,
        unique: true
    },
    serviceID: String,
    categoryID: String,
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
    // card details is not mandatory since partner can receive payment via cash, net banking or UPI,
    cardDetails: Number,
    subServices: [{      // subservices - in spa there is manicure, padicure, waxing, massage etc
        subserviceID:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            name: {
                type: String,
                required: true,
                trim: true
            },
            summary: {
                type: String,
                trim: true
            }
        }
    }],
    bookings: {
        Booking: [
            {
                subServiceID: [String],
                customerID: String,
                status: String, // completed, ongoing, upcoming
                feedback: String,
                rating: Number
            }
        ]
    },
    partnerStatus: {
        type: Boolean,
        default: true
    }
});