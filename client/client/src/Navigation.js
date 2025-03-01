import React, { useState } from "react";
import "./Navigation.css";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-logo">SkillConnect</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navigation;
