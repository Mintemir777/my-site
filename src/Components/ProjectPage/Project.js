// Project.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@material-ui/core/Button";
import projects from "./ProjectsData";
import ProjectModal from "./ProjectModal";
import "./Project.css";

const Project = () => {
  const location = useLocation();
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsProjectPage(location.pathname === "/project");
  }, [location]);

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
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
          <ProjectModal
            selectedProject={selectedProject}
            handleCloseModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
