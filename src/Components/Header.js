import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../Houses_apartments_with_tree_and_green_garden_vector_icon_logo-removebg-preview.png";

const Header = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsAboutPage(location.pathname === "/about");
    setIsContactPage(location.pathname === "/contacts");
  }, [location]);

  return (
    <header
      className={
        isAboutPage ? "gray-bg" : isContactPage ? "contact-bg" : ""
      }
    >
      <ul className="nav">
        <img src={logo} className="logo" alt="Logo" />
        <div className={isAboutPage ? "nav-style-second" :  isContactPage ? "nav-style-third" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/"
              end
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" : "nav-link-style"
              }
            >
              HOME
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/about"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" : "nav-link-style"
              }
            >
              ABOUT
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/contacts"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" : "nav-link-style"
              }
            >
              CONTACTS
            </NavLink>
          </li>
        </div>
        <div className={isAboutPage ? "nav-style-second" : isContactPage ? "nav-style-third" : "nav-style"}>
          <li className="serious-nav nav-text">
            <NavLink
              to="/projects"
              className={
                isAboutPage ? "nav-link-style-second" : isContactPage ? "nav-link-style-third" : "nav-link-style"
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
