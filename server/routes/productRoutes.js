import { Router } from 'express';
import { getAllProducts,buyProduct } from '../controllers/products.js';

const router= new Router();

router.get('/getAllProducts',getAllProducts)
router.post('/buy',buyProduct)

export default router