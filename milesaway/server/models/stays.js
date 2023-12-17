import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    slug: { // ex. "los-angeles-hotel-1"
        type: String,
        required: [true, 'A slug is required'],
        trim: true,
        index: true,
        unique: true
    },
    city: { // ex. "Los Angeles"
        type: String,
        required: true,
        trim: true
    },
    checkIn: { // ex. "2020-01-01T00:00:00.000Z"
        type: Date,
        required: true,
    },
    checkOut: { // ex. "2020-03-01T00:00:00.000Z"
        type: Date,
        required: true,
    },
    establishment: { // ex. "Hotel 1"
        type: String,
        trim: true
    },
    price: { // ex. 100
        type: Number,
        required: true
    },
    left: { // ex. 18
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    image: {
        type: String,
        required: false,
        trim: true
    }

});

export default mongoose.model('Stay', schema);
