import React, { useState } from "react";

import { FaRegWindowClose } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
import classes from "./Navs.module.css";

const MobNavs: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const hamIcon = (
    <TiThMenu
      className={classes.hamburger}
      size="40px"
      color="springgreen"
      onClick={menuHandler}
    />
  );
  const closeIcon = (
    <FaRegWindowClose
      className={classes.hamburger}
      size="40px"
      color="springgreen"
      onClick={menuHandler}
    />
  );
  const closeMobMenuHandler = () => setOpenMenu(!openMenu);
  return (
    <>
      <nav className={classes["mob-navs"]}>
        {openMenu ? closeIcon : hamIcon}
        {openMenu && (
          <NavLinks isMob={openMenu} closeMobMenu={closeMobMenuHandler} />
        )}
      </nav>
    </>
  );
};

export default MobNavs;
