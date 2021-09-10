import React from "react";
import Svg from "./UI/Svg";
import classes from "./Assets/universal.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes["uni-align"]}>
      <Svg />
    </div>
  );
};

export default Home;
