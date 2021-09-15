import React from "react";
import classes from "./Assets/universal.module.css";

// interface AboutMe {
//   name: string;
//   occupation?: string;
// }

const About: React.FC = (props) => {
  return (
    <>
      <div className={classes["about-content"]}>
        <p>
          I am a creative frontend developer. From Nyeri Kenya, based in
          Nairobi.
        </p>
        <p style={{ color: "grey" }}>// 3+ years of experience</p>
        Skills
        <div className={classes.about_main}>
          <span>Frontend</span>
          <span>Javascript</span>
        </div>
      </div>
    </>
  );
};

export default About;
