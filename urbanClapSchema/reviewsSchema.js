const mongoose = require('mongoose');

/*
        ----- reviews schema contians following -----
        all the reviews of all the posts along with customerID, partnerID and serviceID 
        and the review details - feedback , time of creation and ratings
*/

const reviewSchema = new mongoose.model({
    reviews: [
        {
            customerID: {
                type: String,
                required: true,
                trim: true
            },
            partnerID: {
                type: String,
                required: true,
                trim: true
            },
            serviceID: {
                type: String,
                required: true,
                trim: true
            },
            createdAt: {
                type: Date,
                required: true,
                default: Date.now()
            },
            rating: {
                type: Number, // 0-10
                default: 10
            },
            feedback: String
        }
    ]
});
