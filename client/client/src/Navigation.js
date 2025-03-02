import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login"); // Navigate to the login page
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add any additional logout logic here (e.g., clearing tokens, etc.)
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <nav className="navigation">
      <div className="nav-logo">SkillConnect</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/add-job">Add Vacancy</Link>
        <Link to="/workers">Workers List</Link>

        {/* Conditionally render Login/Logout and Sign Up buttons */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
        ) : (
          <>
            <button onClick={handleLogin} className="nav-button">
              Login
            </button>
            <Link to="/signup" className="nav-button">
              Sign Up
            </Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navigation;