import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { getUser } from '../controllers/saveUrl.controller.js';

const router = express.Router();

router.get('/user/profile', verifyToken, getUser);

export default router;