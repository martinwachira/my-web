import React from "react";
import Svg from "./UI/Svg";
import classes from "./Assets/universal.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes["uni-align"]}>
      <Svg />
      <div className={classes["home-container"]}>
        <h4>
          My name is{" "}
          <a
            className={classes["home-links"]}
            href="https://www.linkedin.com/in/martin-wachira-82a243117/"
          >
            Martin Wachira
          </a>
          , I am a Software Developer mostly experienced in Frontend Web
          Development.
        </h4>
      </div>
    </div>
  );
};

export default Home;
