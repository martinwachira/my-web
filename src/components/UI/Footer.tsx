import React, { useEffect, useState } from "react";

import classes from "../Assets/universal.module.css";

const Footer: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };
  return (
    <h5>
      <span style={{ color: "springgreen" }}>console.log</span>
      <span className={classes.obj_color}>(</span>'copyright ©{" "}
      <span className={classes.copy_name}>WCR: </span>{" "}
      <span className={classes.date_color}>{date.toLocaleString()}</span>'{" "}
      <span className={classes.obj_color}>)</span>
    </h5>
  );
};

export default Footer;
