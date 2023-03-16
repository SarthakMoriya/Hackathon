import Products from "../Models/productModel.js";
import Farmers from '../Models/farmerModel.js'
import Sellers from '../Models/sellerModel.js'


export const createProduct = async (req, res) => {

    try {
        const { name, price, category, userId, picturePath, username } = req.body;

        const isFarmer = await Farmers.findById(userId)
        if (!isFarmer) return res.status(401).json({ msg: "Only Farmers can add Products...!" })
        const product = new Products({
            name,
            price,
            category,
            userId,
            picturePath,
            username
        })
        const savedProduct = await product.save()
        console.log(savedProduct)
        res.status(201).json({ product: savedProduct })
    } catch (error) {
        res.status(500).json({ msg: "Only Farmers can add Products...!", error })
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

export const buyProduct = async (req, res) => {
    try {
        const { productId, farmerId, customerId } = req.body
        // console.log(userId, productId)
        const isProduct = await Products.findById(productId);
        const isFarmer = await Farmers.findById(farmerId)
        const isCustomer = await Sellers.findById(customerId)
        console.log(isProduct, isFarmer)
        // // if (!isProduct || !isFarmer) return res.status(404).json({ msg: "Error wrong item or Seller not found" })

        await Farmers.updateOne({ _id: farmerId }, { "$push": { "orders": { "productId": `${productId}`, "customerId": `${customerId}` } } })
        await Sellers.updateOne({ _id: customerId }, { "$push": { "orders": { "productId": `${productId}`, "farmerId": `${farmerId}` } } })
        // res.status(200).json("ok")
        res.status(200).json({ msg: "order placed" })

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error...!", error })

    }
}


export const getProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        console.log(productId)
        const product = await Products.findById(productId);
        if (!product) return res.status(404).json({ msg: "No Product Found" })
        res.status(201).json({ product })
    } catch (error) {
        res.status(500).json({ msg: "No product Found" })
    }
}