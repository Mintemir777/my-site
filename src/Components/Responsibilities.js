import icon1 from "../icon1.png";
import icon2 from "../icon6.png";
import icon3 from "../icon3.png";
import icon4 from "../icon4.png";
import icon5 from "../icon5.png";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const responsibilities = [
  {
    icon: icon1,
    title: "Quality and Safety Assurance",
    description:
      "The construction company must guarantee the quality of the work performed and ensure safety on the construction site. This includes quality control of materials, adherence to building codes, and safety regulations.",
  },
  {
    icon: icon2,
    title: "Execution of Design and Construction Works",
    description:
      "The construction company must carry out the work in accordance with the contract, project documentation, and established quality standards. This includes construction, installation of communication systems, finishing works, and other related tasks.",
  },
  {
    icon: icon3,
    title: "Compliance with Deadlines and Budget",
    description:
      "The construction company is responsible for completing the work within the agreed time frame and budget. It should plan and coordinate the work to ensure timely completion without exceeding costs.",
  },
  {
    icon: icon4,
    title: "Providing Information and Advice",
    description:
      "The construction company should provide the customer with updates on the progress of work, changes in the project, and costs. It should be open to discussing and consulting with the customer to ensure mutual understanding and successful project implementation.",
  },
];

const Responsibilities = () => {
  return (
    <div className="container-icons">
      <div className="box-icons-container">
        {responsibilities.map((responsibility, index) => (
          <div className="box-icons text serious" key={index}>
            <img src={responsibility.icon} alt={`Icon ${index + 1}`} className="icon-image" />
            <h3>{responsibility.title}</h3>
            <p>{responsibility.description}</p>
            <NavLink to="about">
              <Button
                variant="text"
                sx={{
                  color: "gray",
                  "&:hover": {
                    color: "red",
                    borderColor: "pink",
                    backgroundColor: "white",
                  },
                }}
              >
                ➜
              </Button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;
