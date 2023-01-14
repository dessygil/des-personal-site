import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import SideBarSocials from "./components/sidebarsocials/SideBarSocials";
import Footer from "./components/footer/Footer";
import Blog from "./pages/blog/Blog";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound'

import "./index.css";

function App() {
  return (
    <div className="body">
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
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
        <div className="left-side-div">
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
