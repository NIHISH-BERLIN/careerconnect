const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobById
} = require("../controllers/jobController");

const {
  protect,
  recruiterOnly
} = require("../middleware/authMiddleware");

// Recruiter only – Post a job
router.post("/", protect, recruiterOnly, createJob);

// Public – Get all active jobs
router.get("/", getAllJobs);

// Public – Get individual job
router.get("/:id", getJobById);

module.exports = router;