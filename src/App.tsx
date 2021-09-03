import "./App.css";

import React from "react";
import logo from "./logo.svg";

function App() {
  const handleHomeOpen = () => {
    console.log("open home");
  };
  return (
    <>
      <div className="App">
        <div className="section">
          <nav className="hm">
            <button onClick={handleHomeOpen}>🏠127.0.0.1</button>
          </nav>
          <span className="abt-cont">
            <p>?.about</p>
            <p>work()</p>
            <p>_contact['']</p>
          </span>
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
