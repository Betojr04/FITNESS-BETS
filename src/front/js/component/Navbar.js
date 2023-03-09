import React, { Context, useState, useEffect } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Link 1");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = (e) => {
    setActiveLink(e.target.innerText);
  };
  const handleNavbarOpen = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>

      <button
        className={`navbar-toggle ${navbarOpen ? "open" : ""}`}
        onClick={handleNavbarToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${navbarOpen ? "open" : ""}`}>
        <li
          className={`navbar-link ${activeLink === "Link 1" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Link 1
        </li>
        <li
          className={`navbar-link ${activeLink === "Link 2" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Link 2
        </li>
        <li
          className={`navbar-link ${activeLink === "Link 3" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Link 3
        </li>
        <li
          className={`navbar-link ${activeLink === "Link 4" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Link 4
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
