import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Briefcase, MapPin, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import "../App.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  // Fetch selected job from backend
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/jobs"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load jobs");
        }

        const selectedJob = (data.jobs || []).find(
          (item) => item._id === id
        );

        if (!selectedJob) {
          throw new Error("Job not found");
        }

        setJob(selectedJob);

      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  // Apply for selected job
  const handleApply = async () => {
    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");

    if (!token) {
      toast.error("Please login before applying");
      navigate("/login");
      return;
    }

    // Check user role
    const savedUser =
      localStorage.getItem("user") ||
      sessionStorage.getItem("user");

    if (savedUser) {
      const user = JSON.parse(savedUser);

      if (user.role !== "candidate") {
        toast.error("Only candidates can apply for jobs.");
        return;
      }
    }

    try {
      setApplying(true);

      const response = await fetch(
        `http://localhost:5000/api/applications/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            coverLetter
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Application submission failed"
        );
      }

      toast.success("Application submitted successfully!");

      setCoverLetter("");

    } catch (error) {
      toast.error(error.message);
    } finally {
      setApplying(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="page-container">
        <h2>Loading job details...</h2>
      </div>
    );
  }

  // Job not found
  if (!job) {
    return (
      <div className="page-container">
        <h2>Job not found</h2>
        <Link to="/jobs">Back to Jobs</Link>
      </div>
    );
  }

  return (
    <div className="page-container">

      <Link to="/jobs" className="back-link">
        <ArrowLeft size={18} /> Back to Jobs
      </Link>

      <br />
      <br />

      <div className="job-details-card">

        <Briefcase size={40} />

        <h1>{job.title}</h1>

        <h3>{job.company}</h3>

        <p>
          <MapPin size={16} /> {job.location}
        </p>

        <p>
          <strong>Job Type:</strong> {job.jobType}
        </p>

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <hr />

        <h3>Job Description</h3>

        <p>{job.description}</p>

        <h3>Requirements</h3>

        {job.requirements?.length > 0 ? (
          <ul>
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No specific requirements listed.</p>
        )}

        <h3>Required Skills</h3>

        <div className="skills-list">
          {job.skills?.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <hr />

        <h2>Apply for this Job</h2>

        <label>Cover Letter (Optional)</label>

        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Introduce yourself and explain why you are suitable for this job..."
          rows="5"
        />

        <br />
        <br />

        <button
          onClick={handleApply}
          disabled={applying}
          className="auth-submit"
        >
          {applying ? "Submitting..." : "Apply Now"}
        </button>

      </div>

    </div>
  );
}

export default JobDetails;