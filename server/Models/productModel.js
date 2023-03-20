import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'product must have a name!'] },
    price: { type: Number, required: [true, 'product must have a price!'] },
    photo: { type: String },
    userId: { type: String, required: [true, 'product must have a price!'] },
    category: { type: String },
    units: { type: String,default:'/kg'},
    picturePath: { type: String },
    username: { type: String },
})

const Products =  mongoose.model('Products', productSchema);
export default Products;