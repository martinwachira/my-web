import "./App.css";

import React, { useState } from "react";

import About from "./components/About";
import Blinker from "./components/UI/Blinker";
import MyImg from "./components/UI/MyImg";

// import logo from "./logo.svg";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleHomeOpen = () => {
    console.log("open home");
    setShow(true);
  };

  return (
    <>
      <div className="App">
        <MyImg />
        <div className="section">
          {/* section navs */}
          <div className="header-navs">
            <nav className="hme">
              <a href="# ">127.0.0.1</a>
            </nav>
            <nav className="other-navs">
              <a href="# " onClick={handleHomeOpen}>
                ?.about
              </a>
              <a href="# ">work()</a>
              <a href="# ">_contact['']</a>
            </nav>
          </div>
          <div className="blinker">
            <Blinker />
          </div>

          {/* section body */}
          {show && (
            <About name="Martin  Wachira" occupation="Web Software Developer" />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
