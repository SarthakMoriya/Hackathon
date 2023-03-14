import Products from "../Models/productModel.js";
import Farmers from '../Models/farmerModel.js'


export const createProduct = async (req, res) => {
    
    try {
        const { name, price, category, userId,picturePath } = req.body;
         const isFarmer = await Farmers.findById(userId)
        if (!isFarmer) return res.status(401).json({ msg: "Only Farmers can add Products...!" })
        const product = new Products({
            name,
            price,
            category,
            userId,
            picturePath
        })
        const savedProduct=await product.save()
        console.log(savedProduct)
        res.status(201).json({ product: savedProduct })
    } catch (error) {
        res.status(500).json({ msg: "Only Farmers can add Products...!" ,error})
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json("Internal Server Error...!")
    }
}

