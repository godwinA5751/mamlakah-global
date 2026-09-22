import express from "express";

import {
  createPrayerPoint,
  getAllPrayerPoint,
  getPrayerPoint,
  getNewPrayerCount,
  markPrayerReviewed,
  deletePrayerPoint,
} from "../controllers/prayerPointController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createPrayerPoint);

router.get("/count/new", auth, getNewPrayerCount);

router.get("/", auth, getAllPrayerPoint);

router.get("/:id", auth, getPrayerPoint);

router.patch("/:id/reviewed", auth, markPrayerReviewed);

router.delete("/:id", auth, deletePrayerPoint);

export default router;