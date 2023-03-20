import Farmers from '../Models/farmerModel.js'

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
        console.log(id,req.params)
        const farmer = await Farmers.findById(id);
        console.log(farmer)
        res.status(200).json({ farmer })
    } catch (error) {
        res.status(500).json({ error: "No User Found...!" })
    }
}

