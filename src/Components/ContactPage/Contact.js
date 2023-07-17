import { motion } from "framer-motion";
import image from "../ContactPage/ContactImage.jpg";
import { ContactsForm } from "../Forms";

const Contact = () => {
  return (
    <div className="contact-bg">
      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <h1 className="text-color-contact serious-contact size-contact ">
          Contact <span style={{ color: "#ABC2C1" }}>Us</span>
        </h1>
        <div className="contact-bg container-about ">
          <img src={image} className="picture-contact" alt="About" />
          <ContactsForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
