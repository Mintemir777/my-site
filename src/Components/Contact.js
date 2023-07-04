import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import image from "../BB Section _ Burobill _ Archello.jpg"
import { ContactsForm } from "./Forms";

const Contact = () => {
  return (
    <motion.div
      className="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{opacity: 0}}
      transition={{ duration: 0.3, ease: "linear" }}
    >
       <h1 className="text-color-contact serious-contact size-contact ">
          Contact <span style={{ color: "#ABC2C1" }}>Us</span>
        </h1>
      <div className="contact-bg container-about ">
          <img src={image } className="picture-contact" alt="About"/>
       
          {/* <HorizontalLinearStepper  /> */}
          <ContactsForm />
      </div>

    </motion.div>
  );
};

export default Contact;
