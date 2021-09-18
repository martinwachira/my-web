// import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

import React, { useState } from "react";

import NavLinks from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
import classes from "./Navs.module.css";

const MobNavs: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className={classes["mob-navs"]}>
        <TiThMenu
          className={classes.hamburger}
          size="40px"
          color="springgreen"
          onClick={onMenuHandler}
        />
        {openMenu && <NavLinks />}
      </nav>
    </>
  );
};

export default MobNavs;
