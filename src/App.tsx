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
        <div className="section">
          {/* section header */}
          <div className="header">
            <nav className="hm">
              <button>🏠127.0.0.1</button>
            </nav>
            <span className="abt-cont">
              <button onClick={handleHomeOpen}>?.about</button>
              <button>work()</button>
              <button>_contact['']</button>
            </span>
          </div>
          <div className="blinker">
            <Blinker />
          </div>

          {/* section body */}
          <div className="sec-body">
            {show && (
              <About
                name="Martin  Wachira"
                occupation="Web Software Developer"
              />
            )}
          </div>
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
