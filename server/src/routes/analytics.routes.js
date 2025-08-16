import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { getUserAnalytics } from '../controllers/analytics.controller.js';

const router = express.Router();

router.get('/', verifyToken, getUserAnalytics);

export default router;