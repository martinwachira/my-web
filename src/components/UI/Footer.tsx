import React from "react";
import classes from "../Assets/universal.module.css";

const Footer: React.FC = () => {
  let date_today = new Date().toLocaleString();
  return (
    <h5>
      <span style={{ color: "springgreen" }}>console.log</span>
      <span className={classes.obj_color}>(</span>'copyright ©{" "}
      <span className={classes.copy_name}>WCR: </span>{" "}
      <span className={classes.date_color}>{date_today}</span>'{" "}
      <span className={classes.obj_color}>)</span>
    </h5>
  );
};

export default Footer;
