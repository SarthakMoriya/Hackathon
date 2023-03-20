import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    type: { type: String, default: "Company" },
    person: { type: String, default: "Receptionist" },

}, { timestamps: true })
//timestamps gives details like when was added updated ...

const Company = mongoose.model('Company', farmerSchema)
export default Company;