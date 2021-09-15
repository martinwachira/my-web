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
        <br />
        Skills
        <div className={classes.about_main}>
          <ul>
            <li>Javascript</li>
            <li>UI/UX Design</li>
          </ul>
          <ul>
            <li>Nodejs</li>
            <li>Redux</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Angular</li>
          </ul>
          <ul>
            <li>JQuery</li>
            <li>ES6</li>
          </ul>
          <ul>
            <li>CSS, HTML</li>
            <li>SASS</li>
          </ul>
          <ul>
            <li>Laravel</li>
            <li>Django</li>
          </ul>
          <ul>
            <li>Axios</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
