const Application = require("../models/Application");
const Job = require("../models/Job");

// Apply for a job
const applyForJob = async (req, res) => {
  try {
    const { coverLetter } = req.body;
    const jobId = req.params.jobId;

    if (req.user.role !== "candidate") {
      return res.status(403).json({
        message: "Only candidates can apply for jobs."
      });
    }

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found."
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      candidate: req.user.id
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job."
      });
    }

    const application = await Application.create({
      job: jobId,
      candidate: req.user.id,
      coverLetter: coverLetter || ""
    });

    res.status(201).json({
      message: "Application submitted successfully!",
      application
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "You have already applied for this job."
      });
    }

    res.status(500).json({
      message: "Application failed.",
      error: error.message
    });
  }
};


// Get candidate applications
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      candidate: req.user.id
    })
      .populate("job")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: applications.length,
      applications
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch applications.",
      error: error.message
    });
  }
};


// Get recruiter applications
const getRecruiterApplications = async (req, res) => {
  try {
    const recruiterJobs = await Job.find({
      recruiter: req.user.id
    }).select("_id");

    const jobIds = recruiterJobs.map(job => job._id);

    const applications = await Application.find({
      job: { $in: jobIds }
    })
      .populate("candidate", "name email")
      .populate("job", "title company")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: applications.length,
      applications
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recruiter applications.",
      error: error.message
    });
  }
};


module.exports = {
  applyForJob,
  getMyApplications,
  getRecruiterApplications
};