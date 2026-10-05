import { Router } from 'express';
import { post_addproduct_1, get_infoproduct_1, get_infoproductadmin_1, get_maylanhpublic_1, get_hotsaleweek_1, get_percenttop_1, get_product_info_id_1, get_fullproduct_1 } from '../controllers/productsController.js';
import upload from '../config/upload.js';

const router = Router();

router.post('/addproduct', upload.single('file'), post_addproduct_1);
router.get('/infoproduct', get_infoproduct_1);
router.get('/infoproductadmin', get_infoproductadmin_1);
router.get('/maylanhpublic', get_maylanhpublic_1);
router.get('/hotsaleweek', get_hotsaleweek_1);
router.get('/percenttop', get_percenttop_1);
router.get('/product_info/:id', get_product_info_id_1);
router.get('/fullproduct', get_fullproduct_1);

export default router;
