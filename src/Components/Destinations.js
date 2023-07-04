import React from "react";
import imagefirst from "../Architectural Perspective Section.jpg";
import imagetwo from "../image2.jpg";
import imagethree from "../image3.png";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
const Destinations = () => {
  return (
    <section className="image-container">
      <div className="card">
        <img src={imagefirst} className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Plan</h1>
          <p className="card-sub-title text serious-destination ">
            A well-designed building plan is the blueprint for success in
            construction.
          </p>
          <p className="card-info">
            <NavLink to="projects">
              <Button
                variant="text"
                sx={{
                  color: "gray",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Learn more
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="card">
        <img src={imagetwo} className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Quality</h1>
          <p className="card-sub-title text serious-destination ">
            Quality is never an accident; it is always the result of intelligent
            effort.
          </p>
          <p className="card-info">
            {" "}
            <NavLink to="projects">
              <Button
                variant="text"
                sx={{
                  color: "gray",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Learn more
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="card">
        <img src={imagethree} className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Interior</h1>
          <p className="card-sub-title text serious-destination ">
            The interior of a building is a reflection of its soul, where design
            and functionality intertwine.
          </p>
          <p className="card-info">
            {" "}
            <NavLink to="projects">
              <Button
                variant="text"
                sx={{
                  color: "gray",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Learn more
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
