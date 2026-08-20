import express from "express";

import {
  createBioData,
  getAllBioData,
  getBioData,
  deleteBioData,
} from "../controllers/bioDataController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createBioData);

router.get("/", auth, getAllBioData);

router.get("/:id", auth, getBioData);

router.delete("/:id", auth, deleteBioData);

export default router;