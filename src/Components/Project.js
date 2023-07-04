import Card from "./Card";
import { animate, motion } from "framer-motion";

const Project = () => (
  <motion.div
    className="main-content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "linear" }}
  >
    <h2>safas</h2>
    <Card />
  </motion.div>
);

export default Project;
