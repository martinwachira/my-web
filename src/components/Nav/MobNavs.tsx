// import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

import NavLinks from "./NavLinks";
import React from "react";
import classes from "./Navs.module.css";

const MobNavs: React.FC = () => {
  return (
    <>
      <nav className={classes["mob-navs"]}>
        <NavLinks />
      </nav>
    </>
  );
};

export default MobNavs;
