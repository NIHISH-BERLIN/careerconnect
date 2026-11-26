const Job = require("../models/Job");

// CREATE JOB – Recruiter only
const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobType,
      salary,
      description,
      requirements,
      skills
    } = req.body;

    if (!title || !company || !location || !jobType || !description) {
      return res.status(400).json({
        message: "Please fill all required fields."
      });
    }

    const job = await Job.create({
      title,
      company,
      location,
      jobType,
      salary,
      description,
      requirements,
      skills,
      recruiter: req.user.id
    });

    res.status(201).json({
      message: "Job posted successfully!",
      job
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to post job.",
      error: error.message
    });
  }
};

// GET ALL ACTIVE JOBS – Public
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: "Active" })
      .populate("recruiter", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: jobs.length,
      jobs
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs.",
      error: error.message
    });
  }
};

// GET JOB BY ID – Public
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("recruiter", "name");

    if (!job) {
      return res.status(404).json({
        message: "Job not found."
      });
    }

    res.status(200).json({ job });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch job.",
      error: error.message
    });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById
};