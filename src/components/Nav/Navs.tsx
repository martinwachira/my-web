// import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

// import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import React from "react";
import classes from "./Navs.module.css";

const Navs: React.FC = () => {
  return (
    <>
      <nav className={classes["other-navs"]}>
        <NavLinks />
      </nav>
    </>
  );
};

export default Navs;
