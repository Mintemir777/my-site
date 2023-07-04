import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { animate, motion } from "framer-motion";
import DotsMobileStepper from "./AnimatedRoutes";
import Card from "./Card";
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
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <img src={logo} className="logo-build" alt="Build Logo" />
        <div className="overlay">
          <div className="content">
            <h4 className={textDecoration}>BUILD HOUSE</h4>
            <p className={textDecoration}>answer key for all your questions.</p>
            <h4>
              <NavLink to="about" className="show-details subdued-italic">
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
