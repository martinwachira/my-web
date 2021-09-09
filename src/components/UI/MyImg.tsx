import "./../../App.css";

import React from "react";

const MyImg: React.FC = () => {
  return (
    <div className="my-img">
      <img
        src="https://avatars.githubusercontent.com/u/60017194?v=4"
        alt="wcr"
      />
      <div className="overlay">
        <div className="text">Martin Wachira Ngari</div>
      </div>
    </div>
  );
};

export default MyImg;