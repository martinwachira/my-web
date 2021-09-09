import React from "react";

interface Me {
  name: string;
  occupation: string;
}

const About: React.FC<Me> = (props) => {
  console.log("my name is martin");
  return (
    <>
      {props.name}
      {props.occupation}
    </>
  );
};

export default About;
