import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import About from "./About";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
}
