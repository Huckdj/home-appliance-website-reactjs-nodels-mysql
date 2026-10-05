import { Router } from 'express';
import { get_loaimay_1, post_addmachine_1, post_addmanufacture_1, get_hang_1 } from '../controllers/catalogController.js';

const router = Router();

router.get('/loaimay', get_loaimay_1);
router.post('/addmachine', post_addmachine_1);
router.post('/addmanufacture', post_addmanufacture_1);
router.get('/hang', get_hang_1);

export default router;
