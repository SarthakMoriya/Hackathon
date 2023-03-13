import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    picturePath: {
        type: String,
        default: ""
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    city: { type: String, required: true },
    state: { type: String, required: true },
}, { timestamps: true })
//timestamps gives details like when was added updated ...

const Farmers = mongoose.model('farmers',farmerSchema)
export default Farmers;