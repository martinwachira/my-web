import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/UI/Footer";
import Home from "./components/Home";
import MyImg from "./components/UI/MyImg";
import Navs from "./components/UI/Navs";
import React from "react";
import Work from "./components/Work";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MyImg />
        <div className="section">
          {/* section navs */}
          <Navs />

          {/* section body */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
