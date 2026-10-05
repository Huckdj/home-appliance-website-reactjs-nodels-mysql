import { Router } from 'express';
import { post_register_1, post_login_1, get_session_1, get_logout_1, post_login_2 } from '../controllers/authController.js';
import verifyUser from '../middleware/verifyUser.js';

const router = Router();

router.post('/register', post_register_1);
router.post('/login', post_login_1);
router.get('/', verifyUser, get_session_1);
router.get('/logout', get_logout_1);
router.post('/login', post_login_2);

export default router;
