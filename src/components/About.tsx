import React, { useEffect, useState } from "react";

import classes from "./Assets/universal.module.css";

interface AboutMe {
  experienceYears: number;
  experienceMonths: number;
  startWork: Date;
}

const About: React.FC = (props) => {
  const [myExperience, setMyExperience] = useState<AboutMe>({
    experienceYears: 0,
    experienceMonths: 0,
    startWork: new Date("02/01/2018"),
  });

  useEffect(() => {
    setMyExperience((prevState) => {
      return {
        ...prevState,
        experienceYears: new Date().getFullYear(),
        experienceMonths: new Date().getMonth(),
      };
    });
  }, []);

  const yearsExp =
    +myExperience.experienceYears - myExperience.startWork.getFullYear();

  const monthsExp =
    +myExperience.experienceMonths - myExperience.startWork.getMonth() + 1;

  console.log("Years experience", yearsExp);
  console.log("Months experience", monthsExp);

  return (
    <>
      <div className={classes["about-content"]}>
        <p>
          I ♥ creative frontend development - I'm from Nyeri Kenya and lives in
          Nairobi.
        </p>
        <span style={{ color: "grey" }}>
          <p>fluently writes and speaks English, Swahili and Kikuyu</p>
          <p>
            {" "}
            // {yearsExp} years and {monthsExp}+ months of work experience
          </p>
        </span>
        <br />
        <h4 className={classes.headings}>what_i_do</h4>
        <div className={classes.about_main}>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>Redux</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
          <ul>
            <li>JQuery</li>
            <li>ES6</li>
            <li>Axios</li>
          </ul>
          <ul>
            <li>SASS</li>
            <li>CSS, HTML</li>
            <li>UI/UX Design</li>
          </ul>
          <ul>
            <li>Laravel</li>
            <li>Django</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Microsoft SQL Server</li>
          </ul>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <h4 className={classes.headings}>what_i_use</h4>
        <div className={classes.about_main}>
          <ul>
            <li>Developer Tools</li>
            <li>ESlint</li>
            <li>Prettier</li>
          </ul>
          <ul>
            <li>Jenkins</li>
            <li>Jest</li>
            <li>Git</li>
          </ul>
          <ul>
            <li>SoapUI</li>
            <li>Postman</li>
            <li>Putty</li>
          </ul>
          <ul>
            <li>Composer</li>
            <li>NPM </li>
            <li>MaterialUI / Bootstrap</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
