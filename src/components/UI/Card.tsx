import React from "react";
import classes from "../Assets/card.module.css";

const Card: React.FC = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
