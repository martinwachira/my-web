import React from "react";

interface Me {
  name: string;
  occupation: string;
}

const About: React.FC<Me> = () => {
  return (
    <>
      <p>me</p>
    </>
  );
};

export default About;
