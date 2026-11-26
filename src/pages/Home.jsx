import React from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";
import "../App.css";

function Home() {
  return (
    <>
      {/* Navigation */}
<nav className="navbar">
  <h2 className="logo">
    Career<span>Connect</span>
  </h2>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/jobs">Find Jobs</Link>
    <a href="#companies">Companies</a>
    <a href="#about">About</a>
  </div>

  <div className="nav-buttons">
    <Link to="/login" className="login-btn">
      Login
    </Link>

    <Link to="/register" className="signup-btn">
      Get Started
    </Link>
  </div>
</nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">YOUR CAREER JOURNEY STARTS HERE</p>

          <h1>
            Discover Your <span>Dream Job</span>
            <br />
            Build Your Future.
          </h1>

          <p className="hero-description">
            Explore thousands of opportunities and connect with
            companies that value your talent.
          </p>

          <div className="search-box">
            <div className="search-field">
              <Search />
              <input placeholder="Job title or keyword" />
            </div>

            <div className="search-field">
              <MapPin />
              <input placeholder="Location" />
            </div>

            <button className="search-btn">Search Jobs</button>
          </div>

          <p className="popular">
            Popular: React Developer, UI Designer, Java Developer
          </p>
        </div>

        <div className="hero-card">
          <Briefcase size={40} />

          <h3>Find Your Next Opportunity</h3>
          <p>Thousands of jobs waiting for you.</p>

          <div className="job-stat">
            <h2>10,000+</h2>
            <span>Job Opportunities</span>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="features">
        <div>
          <h2>10K+</h2>
          <p>Job Opportunities</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Companies</p>
        </div>

        <div>
          <h2>5K+</h2>
          <p>Successful Applications</p>
        </div>
      </section>

      {/* Categories */}
      <section className="explore">
        <div className="section-heading">
          <div>
            <p>OPPORTUNITIES</p>
            <h2>Explore Career Opportunities</h2>
          </div>

          <button>
            View All Jobs <ArrowRight size={16} />
          </button>
        </div>

        <div className="category-grid">
          {[
            "Software Development",
            "UI/UX Design",
            "Data Science",
            "Marketing",
          ].map((category) => (
            <div className="category-card" key={category}>
              <Briefcase size={28} />
              <h3>{category}</h3>
              <p>Explore opportunities</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>CareerConnect</h2>
        <p>Discover Opportunities. Build Your Future.</p>
        <p>© 2026 CareerConnect. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;