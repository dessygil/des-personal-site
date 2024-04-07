import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3 }} className="box-content">
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
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const jobs = [
    {
      title: "Sales Development Engineer",
      company: "Nicoya",
      url: "http://nicoyalife.com",
      startDate: new Date("2023-03-01T14:56:59.301+00:00"),
      endDate: null,
      duties: [
        "Exceeded quota in opportunity creation in Q2 2023 with 112.5% and Q3 2023 with 115%",
        "Attended multiple vendor shows in Central US, consistently exceeding lead generation by +50%",
      ],
    },
    {
      title: "Sales Development Representative",
      company: "Patsnap",
      url: "https://www.patsnap.com/",
      startDate: new Date("2021-12-08T14:56:59.301+00:00") ,
      endDate: new Date("2023-03-01T14:56:59.301+00:00"),
      duties: [
        "Used cold outreach techniques to generate the highest amount of leads in Q3 (23) and the third highest revenue in Q2 (\$54,000) and Q3 (\$57,000).",
        "Successfully onboarded three new team members, two exceeding their sales target.",
        "Perfected communication skills through over 25,000 cold calls.",
      ],
    },
    {
      title: "NSERC Undergraduate Research Assistant",
      company: "University Of Guelph",
      url: "https://www.uoguelph.ca/",
      startDate: new Date("2019-05-01T14:56:59.301+00:00"),
      endDate: new Date("2019-09-01T14:56:59.301+00:00"),
      duties: [
        "Synthesized a protected disaccharide acceptor (Lewis Y) ready for glycosylation.",
        "Characterized all compounds using 1D NMR, 2D NMR, Mass Spectrometry, and IR Spectroscopy.",
        "Presented synthetic scheme at CEPS undergraduate poster session of approximately 30 students.",
      ],
    },
  ]

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
            return <li key={node} className="duties">{node}</li>
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
    <div className="experience" id="Experience-anchor">
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
              return <Tab key={node.startDate} label={node.company} />;
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
