import express from "express";
import { signupBusiness,signinBusiness } from "../controllers/businessController.js";

const router = express.Router();

// POST /api/business/signup
router.post("/signup", signupBusiness);

router.post("/signin", signinBusiness);

export default router;
