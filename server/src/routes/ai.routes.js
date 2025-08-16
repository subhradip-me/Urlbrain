import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { suggestTagsAndCategory, summarizeUrl } from "../controllers/ai.controller.js";

const router = express.Router();

// suggest tags & category for a URL
router.post("/suggest", verifyToken, suggestTagsAndCategory);

// optional: summary endpoint
router.post("/summarize", verifyToken, summarizeUrl);

export default router;
