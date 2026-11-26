import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  LayoutDashboard,
  PlusCircle,
  Users,
  FileText,
  Settings,
  LogOut
} from "lucide-react";
import toast from "react-hot-toast";
import "../App.css";

function RecruiterDashboard() {
  const navigate = useNavigate();

  const userData =
    localStorage.getItem("user") ||
    sessionStorage.getItem("user");

  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">

      <aside className="dashboard-sidebar">

        <Link to="/" className="auth-logo">
          Career<span>Connect</span>
        </Link>

        <div className="dashboard-menu">

          <Link to="/recruiter-dashboard" className="dashboard-menu-item active">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <div className="dashboard-menu-item">
            <Briefcase size={20} />
            Manage Jobs
          </div>

          <div className="dashboard-menu-item">
            <Users size={20} />
            Applicants
          </div>

          <div className="dashboard-menu-item">
            <FileText size={20} />
            Company Profile
          </div>

          <div className="dashboard-menu-item">
            <Settings size={20} />
            Settings
          </div>

        </div>

        <button className="dashboard-logout" onClick={handleLogout}>
          <LogOut size={20} />
          Logout
        </button>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Recruiter Dashboard</h1>
            <p>Manage your hiring activities and find great talent.</p>
          </div>

          <div className="dashboard-user">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase() || "R"}
            </div>

            <div>
              <h4>{user?.name || "Recruiter"}</h4>
              <span>Recruiter</span>
            </div>
          </div>

        </header>

        <section className="dashboard-welcome">

          <div>
            <h2>Welcome, {user?.name || "Recruiter"}! 👋</h2>

            <p>
              Find talented professionals and build your dream team.
            </p>

            <button
              className="dashboard-browse-btn"
              onClick={() => toast("Job posting feature coming next!")}
            >
              Post a Job <PlusCircle size={18} />
            </button>
          </div>

          <Briefcase size={90} />

        </section>

        <section className="dashboard-stats">

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <Briefcase size={24} />
            </div>
            <h3>0</h3>
            <p>Active Jobs</p>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <h3>0</h3>
            <p>Total Applicants</p>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <h3>0</h3>
            <p>Shortlisted Candidates</p>
          </div>

        </section>

        <section className="dashboard-jobs">

          <div className="dashboard-section-heading">
            <div>
              <h2>Your Job Postings</h2>
              <p>Track and manage your recruitment activities.</p>
            </div>
          </div>

          <div className="dashboard-empty">

            <Briefcase size={42} />

            <h3>No job postings yet!</h3>

            <p>
              Start hiring by creating your first job posting.
            </p>

            <button
              className="dashboard-browse-btn"
              onClick={() => toast("Job posting feature coming next!")}
            >
              Create Job Posting
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default RecruiterDashboard;