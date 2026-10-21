import express from "express";
import { emailsender } from "../controllers/emailcontroller.js";
const router=express.Router();
router.post("/send",emailsender);
export default router;