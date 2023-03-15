import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: { type: String, required: [true, 'product must have a name!'] },
    price: { type: Number, required: [true, 'product must have a price!'] },
    photo: { type: String },
    userId: { type: String, required: [true, 'product must have a price!'] },
    category: { type: String },
    picturePath: { type: String },
    username: { type: String },
})

const Products = new mongoose.model('Products', productSchema);
export default Products;