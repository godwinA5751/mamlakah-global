import express from "express";

import {
  createPrayerPoint,
  getAllPrayerPoint,
  getPrayerPoint,
  deletePrayerPoint,
} from "../controllers/prayerPointController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createPrayerPoint);

router.get("/", auth, getAllPrayerPoint);

router.get("/:id", auth, getPrayerPoint);

router.delete("/:id", auth, deletePrayerPoint);

export default router;