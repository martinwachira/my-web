import NavLinks from "./NavLinks";
import React from "react";
import classes from "./Navs.module.css";

const Navs: React.FC = () => {
  return (
    <>
      <nav className={classes["main-navs"]}>
        <NavLinks />
      </nav>
    </>
  );
};

export default Navs;
