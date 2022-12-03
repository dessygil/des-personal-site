import React from 'react';
import TopBar from "./components/topbar/TopBar";
import SideBarSocials from "./components/sidebarsocials/SideBarSocials";
//import Home from "./pages/home/Home";
//import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <>
      < TopBar />
      < SideBarSocials /> 
      < Write />
    </>
  );
}

export default App;
