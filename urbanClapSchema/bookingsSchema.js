const mongoose = require('mongoose');

/*
     ---- bookings schema contains all bookings details ---
     each booking of the bookings array has single booking with following details

     bookingID
     serviceID
     customerID
     partnerID (contains the sub services booked)
     status
     feedback
     rating
     time of creation
*/

const bookingsSchema = new mongoose.model({
    bookings: [{
        bookingID: {
            type: String,
            required: [true, 'ID required'],
            trim: true,
            unique: true
        },
        serviceID: {
            type: String,
            required: [true, 'ID required'],
            trim: true,
        },
        customerID: {
            type: String,
            required: [true, 'ID required'],
            trim: true,
        },
        partnerID: {
            type: String,
            required: [true, 'ID required'],
            trim: true,
            subServices: [{
                subServiceID: {
                    type: String,
                    required: [true, 'Sub service ID required']
                }
            }]
        },
        status: {
            type: String,
            required: [true,'Booking status required'],
            trim: true
        },
        feedback: String,
        rating: Number,
        createdAt: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }]
});