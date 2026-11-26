import { useNavigate, Link } from "react-router-dom";
import {
  Briefcase,
  Search,
  FileText,
  Bookmark,
  User,
  LogOut,
  LayoutDashboard,
  Settings
} from "lucide-react";
import toast from "react-hot-toast";
import "../App.css";

function CandidateDashboard() {
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

      {/* Sidebar */}
      <aside className="dashboard-sidebar">

        <Link to="/" className="auth-logo">
          Career<span>Connect</span>
        </Link>

        <div className="dashboard-menu">

          <Link to="/candidate-dashboard" className="dashboard-menu-item active">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link to="/jobs" className="dashboard-menu-item">
            <Search size={20} />
            Find Jobs
          </Link>

          <div className="dashboard-menu-item">
            <FileText size={20} />
            My Applications
          </div>

          <div className="dashboard-menu-item">
            <Bookmark size={20} />
            Saved Jobs
          </div>

          <div className="dashboard-menu-item">
            <User size={20} />
            My Profile
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

      {/* Main Content */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back to your career journey!</p>
          </div>

          <div className="dashboard-user">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <h4>{user?.name || "Candidate"}</h4>
              <span>Job Seeker</span>
            </div>
          </div>
        </header>

        <section className="dashboard-welcome">
          <div>
            <h2>Hello, {user?.name || "Candidate"}! 👋</h2>
            <p>
              Find your dream job and take the next step in your career.
            </p>

            <Link to="/jobs" className="dashboard-browse-btn">
              Explore Jobs <Search size={18} />
            </Link>
          </div>

          <Briefcase size={90} />
        </section>

        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <Briefcase size={24} />
            </div>
            <h3>0</h3>
            <p>Applied Jobs</p>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <Bookmark size={24} />
            </div>
            <h3>0</h3>
            <p>Saved Jobs</p>
          </div>

          <div className="dashboard-stat-card">
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <h3>0</h3>
            <p>Profile Views</p>
          </div>

        </section>

        {/* Recommended Jobs */}
        <section className="dashboard-jobs">

          <div className="dashboard-section-heading">
            <div>
              <h2>Explore Opportunities</h2>
              <p>Discover jobs that match your career goals.</p>
            </div>

            <Link to="/jobs">View All Jobs →</Link>
          </div>

          <div className="dashboard-empty">
            <Briefcase size={42} />

            <h3>Your career journey starts here!</h3>

            <p>
              Explore available opportunities and find your perfect job.
            </p>

            <Link to="/jobs" className="dashboard-browse-btn">
              Browse Jobs
            </Link>
          </div>

        </section>

      </main>

    </div>
  );
}

export default CandidateDashboard;