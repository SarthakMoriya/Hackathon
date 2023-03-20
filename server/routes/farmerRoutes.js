import { Router } from 'express';
import { getAllFarmers ,getFarmer} from '../controllers/farmers.js'
const router = new Router();

router.get('/getAllFarmers', getAllFarmers)
router.get('/getFarmer/:id', getFarmer)


export default router