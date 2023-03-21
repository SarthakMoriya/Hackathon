import { Router } from 'express';
import { getAllFarmers ,getCompany,getCustomer,getFarmer, getRetailer} from '../controllers/farmers.js'
const router = new Router();

router.get('/getAllFarmers', getAllFarmers)
router.get('/getFarmer/:id', getFarmer)
router.get('/getCustomer/:id', getCustomer)
router.get('/getRetailer/:id', getRetailer)
router.get('/getCompany/:id', getCompany)


export default router