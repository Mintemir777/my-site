import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import build1 from "../buiild2.png";
import build2 from "../buiild3.png";
import build3 from "../buiild4.png";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ display: "flex", alignItems: "center", p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "pink",
            },
          }}
        >
          <Tab
            label="Build One"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "pink",
              },
              "&:hover": {
                color: "pink",
              },
            }}
          />
          <Tab
            label="Build Two"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "pink",
              },
              "&:hover": {
                color: "pink",
              },
            }}
          />
          <Tab
            label="Build Three"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "pink",
              },
              "&:hover": {
                color: "pink",
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <img src={build1} alt="Build 1" className="image-size" />
        <Typography variant="body3" className="text serious text-tabs">
          <h1 className="underline">Eram Mixed-use Complex</h1>
          
            The design started and proceeded by forming the empty spaces of the
            building. The project's entrance is formed by creating an open space
            towards the main street and skewed in the direction of the adjacent
            traffic. This empty space makes the commercial section more inviting
            and extends to form the central void of the retail space. This
            extension allows natural light to pass through a large part of the
            commercial space and strengthens the continuity of indoor and
            outdoor spaces.
          
          <br></br>
          <br></br>
          <NavLink to="projects">
            <Button
              variant="outlined"
              sx={{
                color: "gray",
                borderColor: "gray",
                backgroundColor: "white",
                "&:hover": {
                  borderColor: "pink",
                  backgroundColor: "white",
                  color: "pink",
                },
              }}
            >
              Learn more
            </Button>
          </NavLink>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={build2} alt="Build 2" className="image-size" />
        <Typography variant="body3" className="text serious text-tabs">
          <h1 className="underline">Ekspozita Building </h1>
          
            He international architecture firm Mario Cucinella Architects, with
            its focus on research and sustainability, presents its latest
            project in the center of Tirana, Albania. The Ekspozita Building
            will be an impressive building containing shops, residences and
            public facilities, with a height of 93 meters. Its unusual form
            sinuous, dynamic form generates a green area that ‘embraces’ the
            internal public space. The presence of plants on the residential
            terraces conveys the sensation of a green oasis, while balconies
            facing inward create a sense of protection from the frenzy of the
            city.
          
          <br></br>
          <br></br>
          <NavLink to="projects">
            <Button
              variant="outlined"
              sx={{
                color: "gray",
                borderColor: "gray",
                backgroundColor: "white",
                "&:hover": {
                  borderColor: "pink",
                  backgroundColor: "white",
                  color: "pink",
                },
              }}
            >
              Learn more
            </Button>
          </NavLink>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img src={build3} alt="Build 3" className="image-size" />
        <Typography variant="body3" className="text serious text-tabs">
          <h1 className="underline">Ateliê House</h1>
          
            Text description provided by the architects. The Ateliê House was
            designed to be an artistic refuge, an area of inspiration,
            contemplation, and tranquility next to nature, placed on an
            irregular land of 382.56m², located in Arujá, metropolitan region of
            São Paulo. With a simple and objective program where the client's
            main requirement was an unobstructed space so that he could run his
            easel freely and direct him to the chosen view in his moments of
            inspiration. The project with 382.00 m² of the built area was
            divided into three levels: First level, it contains an ample garage
            that will also be used to carve its wood logs into works of art.
          
          <br/>
          <br/>
          <NavLink to="projects">
            <Button
              variant="outlined"
              sx={{
                color: "gray",
                borderColor: "gray",
                backgroundColor: "white",
                "&:hover": {
                  borderColor: "pink",
                  backgroundColor: "white",
                  color: "pink",
                },
              }}
            >
              Learn more
            </Button>
          </NavLink>
        </Typography>
      </TabPanel>
    </Box>
  );
}
