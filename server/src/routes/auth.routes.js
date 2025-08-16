import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route example
router.get('/user-uri', verifyToken);
export default router;
