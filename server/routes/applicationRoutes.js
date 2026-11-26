const express = require("express");
const router = express.Router();

const {
  applyForJob,
  getMyApplications,
  getRecruiterApplications
} = require("../controllers/applicationController");

const {
  protect,
  recruiterOnly
} = require("../middleware/authMiddleware");


router.post("/:jobId", protect, applyForJob);

router.get("/my-applications", protect, getMyApplications);

router.get(
  "/recruiter-applications",
  protect,
  recruiterOnly,
  getRecruiterApplications
);


module.exports = router;