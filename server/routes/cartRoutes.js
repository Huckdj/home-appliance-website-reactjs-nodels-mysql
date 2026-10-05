import { Router } from 'express';
import { post_addcart_1, get_getcount_idtaikhoan_1, get_cart_idtaikhoan_1 } from '../controllers/cartController.js';

const router = Router();

router.post('/addcart', post_addcart_1);
router.get('/getcount/:idtaikhoan', get_getcount_idtaikhoan_1);
router.get('/cart/:idtaikhoan', get_cart_idtaikhoan_1);

export default router;
