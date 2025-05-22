import express from "express";

const router = express.Router();

import {
  getAllJobs,
  getSpecificJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

router.get("/", getAllJobs);
router.get("/:id", getSpecificJob);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;




