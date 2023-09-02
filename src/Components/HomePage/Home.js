/* Ненужное полностью убрал, а все что закоментировано не понял
   нужно или нет,
   Еще убрал ➜ из SHOW DETAILS➜
*/

// import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Tabs from "./SecondaryHomeComponents/Tabs";
import Responsibilities from "./SecondaryHomeComponents/Responsibilities";
import Destinations from "./SecondaryHomeComponents/Destinations";
import "./Home.css";

const Home = () => {
  // const [showText, setShowText] = useState(false);
  // const textDecoration = `text-style-home-for-title ${showText && "fade-in"}`;

  // useEffect(() => {
  //   setShowText(true);
  // }, []);

  return (
    <main>
      <motion.div
        className="hero-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <div className="hero-overlay">
          <p className="text overlay-text">BUILD HOUSE</p>
          <p className="text overlay-text">
            answer key for all your questions.
          </p>
          <h4>
            <NavLink to="about" className="overlay-link overlay-text">
              SHOW DETAILS
            </NavLink>
          </h4>
        </div>
      </motion.div>

      {/* <div className="text-container">
        <h2 className={textDecoration}></h2>
      </div> */}
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
    </main>
  );
};

export default Home;
