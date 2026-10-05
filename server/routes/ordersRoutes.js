import { Router } from 'express';
import { post_api_orders_1, get_infoorder_id_1, get_infoorder_1, get_fulorderproduct_id_1, post_api_cannceledorder_id_1, post_api_update_1 } from '../controllers/ordersController.js';

const router = Router();

router.post('/api/orders', post_api_orders_1);
router.get('/infoorder/:id', get_infoorder_id_1);
router.get('/infoorder', get_infoorder_1);
router.get('/fulorderproduct/:id', get_fulorderproduct_id_1);
router.post('/api/cannceledorder/:id', post_api_cannceledorder_id_1);
router.post('/api/update', post_api_update_1);

export default router;
