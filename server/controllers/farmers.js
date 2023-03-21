import Farmers from '../Models/farmerModel.js'
import Sellers from '../Models/sellerModel.js'
import OtherSellers from '../Models/otherSellers.js'
import Company from '../Models/CompanyModel.js'
export const getAllFarmers = async (req, res) => {
    try {
        const farmers = await Farmers.find();
        res.status(200).json({ farmers })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}

export const getFarmer = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id, req.params)
        const farmer = await Farmers.findById(id);
        console.log(farmer)
        res.status(200).json({ farmer })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}
export const getCustomer = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id, req.params)
        const customer = await Sellers.findById(id);
        res.status(200).json({ customer })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}
export const getRetailer = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id, req.params)
        const retailer = await OtherSellers.findById(id);
        res.status(200).json({ retailer })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}
export const getCompany = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id, req.params)
        const company = await Company.findById(id);
        res.status(200).json({ company })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}

