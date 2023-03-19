import { Router } from 'express';
import { getAllFarmers } from '../controllers/farmers.js'
const router = new Router();

router.get('/getAllFarmers', getAllFarmers)


export default router