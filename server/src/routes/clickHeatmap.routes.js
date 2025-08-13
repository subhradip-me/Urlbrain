import express from "express";
import { getClickHeatmap } from "../controllers/clickHeatmap.controller.js";
import verifyToken from "../middleware/verifyToken.js"; // Import your auth middleware

const router = express.Router();

// Add verifyToken middleware to protect the route
router.get("/heatmap", verifyToken, getClickHeatmap);

export default router;