import { useEffect, useState } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../App.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load jobs");
        }

        setJobs(data.jobs || []);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="jobs-page"><h2>Loading jobs...</h2></div>;
  }

  return (
    <div className="jobs-page">
      <h1>Explore Job Opportunities</h1>
      <p>Find your next career opportunity.</p>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <Briefcase size={30} />

            <h2>{job.title}</h2>
            <h4>{job.company}</h4>

            <p>
              <MapPin size={15} /> {job.location}
            </p>

            <span>{job.jobType}</span>

            <p>{job.salary}</p>

            <Link to={`/jobs/${job._id}`}>
              View Details →
            </Link>
          </div>
        ))}
      </div>

      {jobs.length === 0 && <p>No jobs available.</p>}
    </div>
  );
}

export default Jobs;