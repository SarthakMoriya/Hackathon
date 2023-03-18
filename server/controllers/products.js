import Products from "../Models/productModel.js";
import Farmers from '../Models/farmerModel.js';
import Sellers from '../Models/sellerModel.js';
import Orders from '../Models/orderModel.js';


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
        res.status(201).json({ product: savedProduct, msg: "Product added successfully...!" })
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
        const { productId, farmerId, customerId, status } = req.body
        // console.log(userId, productId)
        const isProduct = await Products.findById(productId);
        const isFarmer = await Farmers.findById(farmerId)
        const isCustomer = await Sellers.findById(customerId)
        console.log(isProduct, isFarmer)
        // // if (!isProduct || !isFarmer) return res.status(404).json({ msg: "Error wrong item or Seller not found" })

        await Farmers.updateOne({ _id: farmerId }, { "$push": { "orders": { "productId": `${productId}`, "customerId": `${customerId}`, "status": `${status}` } } })
        await Sellers.updateOne({ _id: customerId }, { "$push": { "orders": { "productId": `${productId}`, "farmerId": `${farmerId}`, "status": `${status}` } } })
        // res.status(200).json("ok")
        res.status(200).json({ msg: "Order placed successfully...!" })

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

export const buyOrder = async (req, res) => {
    try {
        const { productId, farmerId, customerId, status } = req.body;
        const order = await Orders.create({
            productId,
            farmerId,
            customerId,
            status
        })
        res.status(201).json({ msg: "Order placed Successfully...!", order })

    } catch (error) {
        res.status(500).json({ msg: "Error fetching orders" })

    }
}

export const fetchOrder = async (req, res) => {
    try {
        const { userId, type } = req.params;
        const orders = await Orders.find();
        if (type === 'Seller') {
            const userOrders = orders.filter(order => order.customerId === userId);
            return res.status(200).json({ userOrders })
        } else if (type === 'Farmer') {
            const userOrders = orders.filter(order => order.farmerId === userId);
            return res.status(200).json({ userOrders })
        }

        res.status(404).json({ mg: "No orders Found...!" })

    } catch (error) {
        res.status(500).json({ msg: "Error fetching orders" })

    }
}