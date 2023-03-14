import { Router } from 'express';
import { getAllProducts } from '../controllers/products.js';

const router= new Router();

router.get('/getAllProducts',getAllProducts)

export default router