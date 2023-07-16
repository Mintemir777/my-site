import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Tabs from "./Tabs";
import Responsibilities from "./Responsibilities";
import Destinations from "./Destinations";
import logo from "../japan-house.png";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const textDecoration = `text-style-home-for-title ${
    showText ? "fade-in" : ""
  }`;

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="main-content">
      <motion.div
        className="content-container container "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <img src={logo} className="logo-build" alt="Build Logo" />
        <div className="overlay">
          <div className="content">
            <p className="text serious-text-image ">BUILD HOUSE</p>
            <p className="text serious-text-image">answer key for all your questions.</p>
            <h4>
              <NavLink to="about" className="show-details serious-text-image">
                SHOW DETAILS➜
              </NavLink>
            </h4>
          </div>
        </div>
      </motion.div>
      <div className="text-container">
        <h2 className={textDecoration}></h2>
      </div>
      <div className="center-items">
        <h1 className="text serious size underline">Still in progress</h1>
        <Tabs />
      </div>
      <div className="center-items">
        <h1 className="text serious size underline">Flexible Services</h1>
        <Destinations />
      </div>
      <div className="center-items">
        <h1 className="text serious size underline">Our Responsibilities</h1>
        <Responsibilities />
      </div>
    </div>
  );
};

export default Home;
