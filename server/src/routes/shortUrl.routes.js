import express from 'express';
import { createShortUrl } from '../controllers/shortUrl.controller.js';
import { getUsersShortUrls } from '../controllers/saveUrl.controller.js';
import shortUrl from '../models/shortUrl.model.js';
import verifyToken from '../middleware/verifyToken.js';
const router = express.Router();

router.post("/", verifyToken, createShortUrl);
router.get("/", verifyToken, getUsersShortUrls);

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await shortUrl.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Short URL not found' });
    }
    res.status(200).json({ message: 'Short URL deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete short URL' });
  }
});





export default router;