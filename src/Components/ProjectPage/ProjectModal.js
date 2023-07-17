import React from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
    overlayproject: {
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
      width: "564px", // Set the image width to 100% to fill its container
      height: "941.6px", // Automatically adjust height while maintaining aspect ratio
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
  const ProjectModal = ({ selectedProject, handleCloseModal }) => {
    const classes = useStyles();
  
    return (
      <motion.div
        className={classes.overlayproject}
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
    );
  };
  
  export default ProjectModal;