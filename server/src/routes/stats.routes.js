import { Router } from "express";
import { getTopStats } from "../controllers/stats.controller.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.get("/top", verifyToken, getTopStats);

export default router;
