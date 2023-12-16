import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    slug: { // ex. "new-york-los-angeles_1"
        type: String,
        required: [true, 'A slug is required'],
        trim: true,
        index: true,
        unique: true
    },
    departure: { // ex. "2020-01-01T00:00:00.000Z"
        type: Date,
        required: true,
    },
    arrival: { // ex. "2020-03-01T00:00:00.000Z"
        type: Date,
        required: true,
    },
    origin: { // ex. "New York"
        type: String,
        required: true,
        trim: true
    },
    destination: { // ex. "Los Angeles"
        type: String,
        required: true,
        trim: true
    },
    airline: { // ex. "LATAM"
        type: String,
        trim: true
    },
    price: { // ex. 100
        type: Number,
        required: true
    },
    seats: { // ex. 18
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

export default mongoose.model('Flight', schema);
