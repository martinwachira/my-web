import "../App.css";

import Footer from "./UI/Footer";
import MyImg from "./UI/MyImg";
import NavBar from "./Nav/NavBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchNavs from "./Nav/SwitchNavs";

const ContentContainer: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* section aside image */}
        <MyImg />

        <div className="section">
          {/* section navs */}
          <NavBar />

          {/* section body */}
          <SwitchNavs />

          {/* section footer */}
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default ContentContainer;
