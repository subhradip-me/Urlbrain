import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { saveUrl, getUserUrls } from '../controllers/saveUrl.controller.js';
import saveUrlModel from "../models/saveUrl.model.js";


const router = express.Router();

router.post('/urls', verifyToken, saveUrl);
router.get('/urls', verifyToken, getUserUrls);

// EDIT URL BY ID
router.put('/urls/:id', verifyToken, async (req, res) => {
  try {
    const updated = await saveUrlModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update' });
  }
});

// DELETE URL by ID
router.delete('/urls/:id', verifyToken, async (req, res) => {
  try {
    await saveUrlModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});



export default router;
