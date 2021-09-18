// import MobNavs from "./MobNavs";

import Navs from "./Navs";
import React from "react";
import classes from "./Navs.module.css";

const NavBar: React.FC = () => {
  return (
    <>
      <div className={classes["header-navs"]}>
        <Navs />
      </div>
    </>
  );
};

export default NavBar;
