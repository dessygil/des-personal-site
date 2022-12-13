import React from 'react';
import TopBar from "./components/topbar/TopBar";
import SideBarSocials from "./components/sidebarsocials/SideBarSocials";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//TODO one page app with everything at the front page, route is for blog posts and blog all page and write
//TODO Home has to be changed to main blog page
//TODO have to create a new home page for all my information

function App() {
  return (
    <>
      < TopBar />
      < SideBarSocials />
      <Router>
        <Routes>
          <Route exact path="/blog" element={< Home />} />
          <Route exact path="/blog/post/:postId" element={< Single />} />
          <Route exact path="/blog/write" element={< Write />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
