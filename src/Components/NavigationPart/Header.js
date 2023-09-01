import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logoimage.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);
  useEffect(() => {
    setIsAboutPage(location.pathname === "/about");
    setIsContactPage(location.pathname === "/contacts");
    setIsProjectPage(location.pathname === "/projects");
  }, [location]);

  const styles = {
    headerBg: isAboutPage
      ? "gray-bg"
      : isContactPage
      ? "contact-bg"
      : isProjectPage
      ? "project-bg"
      : "",
    linkText: isAboutPage
      ? "nav-link-about"
      : isContactPage
      ? "nav-link-contact"
      : isProjectPage
      ? "nav-link-projects"
      : "nav-link-home",
  };

  return (
    <header className={styles.headerBg}>
      <ul className="nav">
        <img src={logo} className="logo" alt="Logo" />
        <li className="nav-link">
          <NavLink to="/" end className={styles.linkText}>
            HOME
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about" className={styles.linkText}>
            ABOUT
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contacts" className={styles.linkText}>
            CONTACTS
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/projects" className={styles.linkText}>
            PROJECTS
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
