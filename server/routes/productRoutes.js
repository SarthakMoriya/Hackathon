import { Router } from 'express';
import { getAllProducts, buyProduct, getProduct } from '../controllers/products.js';

const router = new Router();

router.get('/getAllProducts', getAllProducts)
router.post('/buy', buyProduct)
router.get('/buy/:productId', getProduct)

export default router