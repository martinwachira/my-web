import "./App.css";

import Footer from "./components/UI/Footer";
import MyImg from "./components/UI/MyImg";
import NavBar from "./components/Nav/NavBar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchNavs from "./components/Nav/SwitchNavs";

// import MobNavs from "./components/UI/Nav/MobNavs";

const App: React.FC = () => {
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

export default App;
