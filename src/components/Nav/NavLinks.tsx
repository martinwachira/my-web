import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import classes from "./Navs.module.css";

interface menuProps {
  isMob?: boolean;
  closeMobMenu?: any;
}
const NavLinks: React.FC<menuProps> = (props) => {
  console.log("props", props);

  return (
    <div className={classes["nav-links"]}>
      <Link onClick={() => props.isMob && props.closeMobMenu()} to="/">
        127.0.0.1
      </Link>
      <Link onClick={() => props.isMob && props.closeMobMenu()} to="/about">
        ?.about
      </Link>
      <Link onClick={() => props.isMob && props.closeMobMenu()} to="/work">
        work()
      </Link>
      <Link onClick={() => props.isMob && props.closeMobMenu()} to="/contact">
        _contact['']
      </Link>
      <a href="https://www.linkedin.com/in/martin-wachira-82a243117/">
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com/martinwcr">
        <FaTwitter />
      </a>
      <a href="https://stackoverflow.com/users/13235540/martin-wcr">
        <FaStackOverflow />
      </a>
    </div>
  );
};

export default NavLinks;
