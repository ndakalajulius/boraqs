// LandingPage.js

import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <h1>Welcome to Boraqs Tracker</h1>
        <p>Track your files efficiently with our system</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Easy File Management</h2>
          <p>Effortlessly manage your files with our intuitive system.</p>
        </div>
        <div className="feature">
          <h2>Track Progress</h2>
          <p>Stay updated on the progress of your files through each stage.</p>
        </div>
        <div className="feature">
          <h2>Secure & Reliable</h2>
          <p>
            Your files are stored securely and our system is reliable for all
            your tracking needs.
          </p>
        </div>
      </section>
      <footer>
        <p>Get started now!</p>
        <Link to="/signup">
          <button>Click</button>
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
