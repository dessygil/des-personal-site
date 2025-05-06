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

export default function ExperienceComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const companies = {
    "Nicoya": {
      url: "http://nicoyalife.com",
      positions: [
        {
          title: "Interim Account Executive",
          startDate: new Date("2024-10-01"),
          endDate: null,
          duties: [
            "Manage New England territory, fostering strategic partnerships with clients, including Sanofi Ragan Institute and Moderna, to drive revenue growth and expand market presence.",
          ],
        },
        {
          title: "Team Lead/Sr. Sales Development Representative",
          startDate: new Date("2024-06-01"),
          endDate: new Date("2024-10-01"),
          duties: [
            "Led full-cycle sales for instrument warranties, exceeding 125% quota attainment.",
            "Played a key role in the hiring and mentoring 3 new SDRs, ensuring successful onboarding.",
            "Automated lead capture workflows, saving 10 hours/conference via Python scripting",
          ],
        },
        {
          title: "Sales Development Representative",
          startDate: new Date("2023-06-01"),
          endDate: new Date("2024-06-01"),
          duties: [
            "Ranked #1 on team with 113.6% annual quota attainment of meetings set (FY 2023).",
            "Drove $1.1M+ in revenue via strategic cold outreach, securing meetings with 40+ prospects.",
            "Exceded lead generation consistently by >50% at vendor shows/conferences in NA and EMEA.",
          ],
        },
      ],
    },
    "Patsnap": {
      url: "https://www.patsnap.com/",
      positions: [
        {
          title: "Sales Development Representative",
          startDate: new Date("2021-12-08"),
          endDate: new Date("2023-03-01"),
          duties: [
            "Used cold outreach techniques to generate the highest amount of leads in Q3 (23) and the third highest revenue in Q2 ($54,000) and Q3 ($57,000).",
            "Successfully onboarded three new team members, two exceeding their sales target.",
            "Perfected communication skills through over 25,000 cold calls.",
          ],
        },
      ],
    },
    "University Of Guelph": {
      url: "https://www.uoguelph.ca/",
      positions: [
        {
          title: "NSERC Undergraduate Research Assistant",
          startDate: new Date("2019-05-01"),
          endDate: new Date("2019-09-01"),
          duties: [
            "Synthesized a protected disaccharide acceptor (Lewis Y) ready for glycosylation.",
            "Characterized all compounds using 1D NMR, 2D NMR, Mass Spectrometry, and IR Spectroscopy.",
            "Presented synthetic scheme at CEPS undergraduate poster session of approximately 30 students.",
          ],
        },
      ],
    },
  };

  const renderTabPanel = () => {
    const companyName = Object.keys(companies)[activeTab];
    const company = companies[companyName];
    
    return (
      <div>
        <Typography variant="h3" className="company-header">
          <a href={company.url} className="company-link">
            {companyName}
          </a>
        </Typography>
        {company.positions.map((position, index) => (
          <div key={index} className="position-block">
            <Typography variant="h4" className="title">
              {position.title}
            </Typography>
            <Typography variant="body1" className="date">
              {formatDate(position.startDate)}&nbsp;-&nbsp;
              {position.endDate ? formatDate(position.endDate) : <span>Present</span>}
            </Typography>
            <ul className="duties-list">
              {position.duties.map((duty, i) => (
                <li key={i} className="duties">
                  {duty}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
    <section className="experience" id="Experience-anchor" aria-label="Work Experience">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
        role="tablist"
        aria-label="Company tabs"
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Object.keys(companies).map((company, i) => (
            <Tab key={i} label={company} />
          ))}
        </Tabs>
        <TabPanel value={activeTab} index={activeTab}>
          {jobs.length ? renderTabPanel() : <p>Loading</p>}
        </TabPanel>
      </Box>
    </section>
  );
}