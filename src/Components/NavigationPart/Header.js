import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logoimage.png";

const Header = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);
  useEffect(() => {
    setIsAboutPage(location.pathname === "/about");
    setIsContactPage(location.pathname === "/contacts");
    setIsProjectPage(location.pathname === "/projects")
  }, [location]);

  return (
    <header
    className={
      isAboutPage ? "gray-bg" : isContactPage ? "contact-bg" : isProjectPage ? "project-bg" :  ""
    }
    >
      <ul className="nav">
        <img src={logo} className="logo" alt="Logo" />
        <div className={isAboutPage ? "nav-style-second" :  isContactPage ? "nav-style-third" :  isProjectPage ? "nav-style-last" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/"
              end
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" :  isProjectPage ? "nav-link-style-project" : "nav-link-style"
              }
              >
              HOME
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" :  isProjectPage ? "nav-style-last" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/about"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" :  isProjectPage ? "nav-link-style-project" : "nav-link-style"
              }
              >
              ABOUT
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" :  isProjectPage ? "nav-style-last" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/contacts"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" :  isProjectPage ? "nav-link-style-project" : "nav-link-style"
              }
              >
              CONTACTS
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" :  isProjectPage ? "nav-style-last" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/projects"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" :  isProjectPage ? "nav-link-style-project" : "nav-link-style"
              }
              >
              PROJECTS
            </NavLink>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
