import "./App.css";

import React, { useState } from "react";

import About from "./components/About";
import Blinker from "./components/UI/Blinker";

// import logo from "./logo.svg";

function App() {
  const [show, setShow] = useState<boolean>(true);
  const handleHomeOpen = () => {
    console.log("open home");
    setShow(true);
  };

  return (
    <>
      <div className="App">
        <div className="my-img">
          <img
            src="https://avatars.githubusercontent.com/u/60017194?v=4"
            alt="wcr"
          />
          <div className="overlay">
            <div className="text">
              <u>Martin Wachira Ngari</u>
            </div>
          </div>
        </div>
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
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </>
  );
}

export default App;
