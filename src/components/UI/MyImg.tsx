import "./../../App.css";

import React from "react";
import classes from "../Assets/myImg.module.css";

const MyImg: React.FC = () => {
  return (
    <div className={classes["my-img"]}>
      <img
        src="https://avatars.githubusercontent.com/u/60017194?v=4"
        alt="wcr"
      />
      <div className={classes.overlay}>
        <div className={classes.text}>Martin Wachira Ngari</div>
      </div>
    </div>
  );
};

export default MyImg;
