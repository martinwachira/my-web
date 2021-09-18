import "./App.css";

import Footer from "./components/UI/Footer";
import MyImg from "./components/UI/MyImg";
import NavLinks from "./components/Nav/NavLinks";
import Navs from "./components/Nav/Navs";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* section aside image */}
        <MyImg />

        <div className="section">
          {/* section navs */}
          <div className="header-navs">
            <Navs />
          </div>

          {/* section body */}
          <NavLinks />

          {/* section footer */}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
