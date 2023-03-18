import { Router } from 'express';
import { getAllProducts, buyProduct, getProduct, buyOrder, fetchOrder } from '../controllers/products.js';

const router = new Router();

router.get('/getAllProducts', getAllProducts)
// router.post('/buy', buyProduct)
router.post('/buy/', buyOrder)
router.get('/buy/:productId', getProduct)
router.get('/buy/:userId/:type', fetchOrder)

export default router