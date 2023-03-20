import { Router } from 'express'
import { createFarmingProduct } from '../controllers/products.js';
const router = new Router();

router.post('/createFarmingproducts', createFarmingProduct)

export default router;