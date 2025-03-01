/*import React, { useState } from "react";
import "./Navigation.css";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-logo">SkillConnect</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li> 
      </ul>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navigation;*/

/*
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li> 
      </ul>
    </nav>
  );
};

export default Navigation;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-logo">SkillConnect</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navigation;