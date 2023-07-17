import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
const About = () => {
    return (
    <div className={`about-container gray-bg`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <>
        <AboutContent/>
        </>

        <Typography variant="body2" className="text serious">
          
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
