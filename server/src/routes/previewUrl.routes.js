import express from 'express';
import { previewUrlController } from '../controllers/previewUrl.controller.js';
const router = express.Router();



router.get('/', previewUrlController);


export default router;
