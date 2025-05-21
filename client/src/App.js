import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import SideBarSocials from "./components/sidebarsocials/SideBarSocials";
import Footer from "./components/footer/Footer";
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound'
import Preloader from './components/preloader/Preloader';

import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);

  React.useEffect(() =>{
    setTimeout(() => setLoading(true), 3000);
  })

  return (
    <>
    {!loading ? (
      <Preloader />
    ) : (
    <>
    <div className="body">
      <a href="#main" className="skip-to-content">Skip to main content</a>
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
        </>

        )}
        </>
  );
}
export default App;
