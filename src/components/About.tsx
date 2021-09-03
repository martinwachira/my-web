import React from "react";

interface Me {
  name: string;
  occupation: string;
}

const About: React.FC<Me> = (props) => {
  return (
    <>
      {props.name}
      {props.occupation}
    </>
  );
};

export default About;
