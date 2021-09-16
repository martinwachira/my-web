import React, { useState } from "react";

import classes from "./Assets/universal.module.css";

const Work: React.FC = () => {
  const [startDate, setStartDate] = useState();
  return (
    <>
      <div className={classes["about-content"]}>
        <h4>selected_work()</h4>
        <div style={{ color: "gray" }}>
          <h5>Safaricom - Product Development Engineer - </h5>
        </div>
      </div>
    </>
  );
};

export default Work;
