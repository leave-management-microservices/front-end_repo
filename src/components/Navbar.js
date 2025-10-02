import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src="/rra-logo.png" alt="RRA Logo" className="logo" />

      {/* Right-side links */}
      <div className="navbar-user">
        <span>BISENGIMANA KAGIRANEZA I</span>
        <span>Help</span>
        <span>Toolbox</span>
        <span>Log out</span>
      </div>
    </div>
  );
}
