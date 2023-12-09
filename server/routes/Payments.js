// Import the required modules
import express from "express";
const router = express.Router()

import { capturePayment, verifySignature } from "../controllers/Payments.js"
import { auth, isStudent } from "../middlewares/auth.js"
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifySignature", verifySignature)

export default router