import Farmers from '../Models/farmerModel.js'

export const getAllFarmers = async(req, res) => {
    try {
        const farmers=await Farmers.find();
        res.status(200).json({farmers})
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}

