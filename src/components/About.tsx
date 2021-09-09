import React from "react";

interface AboutMe {
  name: string;
  occupation?: string;
}

const About: React.FC<AboutMe> = (props) => {
  console.log("my name is martin");
  return (
    <>
      {props.name}
      {props.occupation}
    </>
  );
};

export default About;
