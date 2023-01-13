import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";

import "./experience.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function Experience() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [jobs, setJobs] = useState([]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("/jobs/");
      setJobs(res.data);
      console.log(res);
    };
    getJobs();
  }, []);

  const renderTabPanel = () => {
    return (
      <>
        <h3>
          <span className="title">{jobs[activeTab].title}</span>
          <span className="company">
            &nbsp;@&nbsp;
            <a href={jobs[activeTab].url} className="company-link">
              {jobs[activeTab].company}
            </a>
          </span>
        </h3>

        <p className="date">
          {formatDate(jobs[activeTab].startDate)}&nbsp;-&nbsp;
          {jobs[activeTab].endDate ? (
            formatDate(jobs[activeTab].endDate)
          ) : (
            <span>Present</span>
          )}
        </p>
        <ul className="duties-list">
        {jobs[activeTab].duties.map((node, i) => {
          return <li key={i} className="duties">{node}</li>
        })}
        </ul>    
      </>
    );
  };

  const formatDate = (date) => {
    let monthDict = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    let d = new Date(date);

    let month = d.getMonth() + 1;
    let year = String(d.getFullYear());

    return monthDict[month] + " " + year;
  };

  return (
    <div className="experience-anchor">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {jobs.length ? (
            jobs.map((node, i) => {
              return <Tab label={node.company} />;
            })
          ) : (
            <p> Loading</p>
          )}
        </Tabs>
        <TabPanel>{jobs.length ? renderTabPanel() : <p> Loading</p>}</TabPanel>
      </Box>
    </div>
  );
}

/*

export default function Experience() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("/jobs/");
      setJobs(res.data);
      
    };
    getJobs();
  }, []);

  return (
    <div id="experience-anchor">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <div className="tab-list">
          {jobs && jobs.map(({node}, i) => {
            
            
            return (
              <p>

              </p>
            )
          })}
        </div>
        <div className="tab-panels">
          
        </div>
      </div>
    </div>
  )
}


 <TabPanel value={} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={} index={2}>
          Item Three
        </TabPanel>
*/
/*
<Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {jobs.length 
            ?  
              jobs.map((node, i) => {
                <p>I am here</p>
              }) 
            : 
              <p> Loading</p>
          }
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    </div>
    */
