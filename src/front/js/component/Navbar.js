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
  return <nav className="navbar"></nav>;
};

export default Navbar;
