import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    farmerId: { type: String, required: true },
    customerId: { type: String, required: true },
    status: { type: String }
})

const Order = mongoose.model('Order', orderSchema);

export default Order;