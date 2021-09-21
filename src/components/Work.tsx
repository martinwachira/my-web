import IndividualWork from "./IndividualWork";
import React from "react";
import classes from "./Assets/universal.module.css";

const Work: React.FC = () => {
  return (
    <>
      <div className={classes["about-content"]}>
        <h3 style={{ color: "rebeccapurple" }}>selected_work()</h3>
        <IndividualWork />
      </div>
    </>
  );
};

export default Work;
