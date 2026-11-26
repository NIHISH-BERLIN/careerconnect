const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    company: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true
    },

    jobType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Internship", "Contract"]
    },

    salary: {
      type: String,
      default: "Not disclosed"
    },

    description: {
      type: String,
      required: true
    },

    requirements: {
      type: [String],
      default: []
    },

    skills: {
      type: [String],
      default: []
    },

    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      enum: ["Active", "Closed"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", jobSchema);