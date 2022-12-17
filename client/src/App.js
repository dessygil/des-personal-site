import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import SideBarSocials from "./components/sidebarsocials/SideBarSocials";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from './pages/home/Home';

import "./index.css";




//TODO one page app with everything at the front page, route is for blog posts and blog all page and write
//TODO Home has to be changed to main blog page
//TODO have to create a new home page for all my information

function App() {
  return (
    <>
      <div>
        < TopBar />
      </div>
      <div className="full-page-structure">
        <div className="right-side-div">
          < SideBarSocials />
        </div>
        <div className="center-div">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/blog" element={< Blog />} />
              <Route exact path="/post/:postId" element={< Single />} />
              <Route exact path="/write" element={< Write />} />
            </Routes>
          </Router>
        </div>
        <div className="left-side-div">

        </div>
      </div>
    </>
  );
}
export default App;
