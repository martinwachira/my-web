import "./App.css";

import Footer from "./components/UI/Footer";
import MyImg from "./components/UI/MyImg";
import NavLinks from "./components/UI/NavLinks";
import Navs from "./components/UI/Navs";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MyImg />
        <div className="section">
          {/* section navs */}
          <Navs />

          {/* section body */}
          <NavLinks />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
