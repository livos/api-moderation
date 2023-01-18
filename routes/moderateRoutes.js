import express from "express";
const router = express.Router();

import { getModerationStatus } from "../controllers/moderationController.js";

router.route("/").post(getModerationStatus);

export default router;
