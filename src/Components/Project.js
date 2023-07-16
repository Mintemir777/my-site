import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import projects from "./ProjectsData";
import "../Project.css";
import { darkScrollbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto"
  },
  modalContent: {
    alignItems: "center", // Center content vertically
    backgroundColor: "rgba(5, 16, 28, 0.4)", // Semi-transparent background color
    padding: theme.spacing(4),
    outline: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: "14px",
    width: "94%",
    maxWidth: "1300px",
    color: "#fff",
    maxHeight: "84vh", // Set maximum height for the modal content
    overflowY: "scroll",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "94%",
    height: "100%",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "transparent", // Make the button transparent to show the overlay color
    border: "black", // Add a border around the button
    borderRadius: "4px", // Add border radius to the button
    padding: theme.spacing(1, 2), // Add padding to the button
    cursor: "pointer",
    transition: "background-color 0.2s, color 0.2s", // Add transition for smooth color change on hover
    "&:hover": {
      color: "#1a2938", // Change text-project color to a dark color on hover
    },
  },
  projectImage: {
    flex: "0 0 50%", // Image takes up 50% width, doesn't grow or shrink
    maxWidth: "90%", // Make sure the image doesn't exceed its container
    marginRight: theme.spacing(4), // Add some spacing between image and text
    borderRadius: "8px", // Add border radius to the image
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    width: "70%", // Set the image width to 100% to fill its container
    height: "auto", // Automatically adjust height while maintaining aspect ratio
  },
  projectTextContainer: {
    flex: "0 0 50%", // Text container takes up 50% width, doesn't grow or shrink
    maxWidth: "50%", // Make sure the text container doesn't exceed its container
  },
  projectName: {
    color: "#1F3A6E" /* Change the color for the project name */,
  },


  projectDetail: {
    marginTop: 8 /* Add margin between project details */,
  },

  landscapeDesign: {
    color: "#788DB9" /* Change the color for the landscape design */,
  },
}));

const Project = () => {
  const location = useLocation();
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsProjectPage(location.pathname === "/project");
  }, [location]);

  const classes = useStyles();

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-color-project">
      <div
        className={` project-container ${isProjectPage ? "project-bg" : ""} `}
      >
        <motion.div
          className="main-content-project"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth in/out animation
        >
          <div className="image-column-project">
            {projects.map((project) => (
              <div className="image-item-project" key={project.key}>
                <img src={project.image} alt={project.name} />
                <div className="image-overlay">
                  <div className="project-details">
                    <h3 className="text serious-project size underline-project">
                      {project.name}
                    </h3>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleOpenModal(project)}
                      style={{
                        marginTop: "auto",
                        position: "absolute",
                        top: "70%",
                        left: "21%",
                      }}
                    >
                      Open Modal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {openModal && selectedProject && (
          <motion.div
            className={classes.overlay}
            // Set initial animation state
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={classes.modalContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Button
                className={classes.closeButton}
                onClick={handleCloseModal}
                variant="outlined"
                color="primary"
              >
                Close
              </Button>
              <div style={{ display: "flex" }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className={classes.projectImage}
                />
                <div className={classes.projectTextContainer}>
                  <h2
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectName}`}
                  >
                    {selectedProject.name}
                  </h2>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDescription}`}
                  >
                    {`The architectural project '${selectedProject.name}' showcases an awe-inspiring estate that epitomizes elegance and grandeur. Nestled amidst the tranquil countryside, this residence exudes timeless sophistication, making it a true architectural marvel.`}
                  </p>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDetail}`}
                  >
                    {`Location: ${selectedProject.location}`}
                  </p>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDetail}`}
                  >
                    {`Built Area: ${selectedProject.builtArea}`}
                  </p>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDetail}`}
                  >
                    {`Floors: ${selectedProject.floors}`}
                  </p>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDetail}`}
                  >
                    {`Architectural Style: ${selectedProject.architecturalStyle}`}
                  </p>
                  <p
                    className={`text-project serious-project-modal underline-project-modal ${classes.projectDetail} ${classes.landscapeDesign}`}
                  >
                    {`Landscape Design: ${selectedProject.landscapeDesign}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
