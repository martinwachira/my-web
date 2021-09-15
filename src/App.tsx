import "./App.css";

import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/About";
// import Blinker from "./components/UI/Blinker";
import Contact from "./components/Contact";
import Footer from "./components/UI/Footer";
import Home from "./components/Home";
import MyImg from "./components/UI/MyImg";
import React from "react";
import Work from "./components/Work";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MyImg />
        <div className="section">
          {/* section navs */}
          <div className="header-navs">
            <nav className="hme">
              <Link to="/">127.0.0.1</Link>
            </nav>
            <nav className="other-navs">
              <Link to="/about">?.about</Link>
              <Link to="/work">work()</Link>
              <Link to="/contact">_contact['']</Link>
              <a href="https://www.linkedin.com/in/martin-wachira-82a243117/">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/martinwcr">
                <FaTwitter />
              </a>
              <a href="https://stackoverflow.com/users/13235540/martin-wcr">
                <FaStackOverflow />
              </a>
            </nav>
          </div>
          {/* <div className="blinker">
            <Blinker />
          </div> */}

          {/* section body */}
          <Switch>
            <Route path="/about">
              <About
              // name="Martin  Wachira"
              // occupation="Web Software Developer"
              />
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
