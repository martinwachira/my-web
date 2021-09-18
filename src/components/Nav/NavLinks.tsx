import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const NavLinks: React.FC = () => {
  return (
    <>
      <Link to="/">127.0.0.1</Link>
      <Link to="/about">?.about</Link>
      <Link to="/work">work()</Link>
      <Link to="/contact">_contact['']</Link>
      <a href="https://www.linkedin.com/in/martin-wachira-82a243117/">
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com/martinwcr">
        <FaTwitter />
      </a>
      <a href="https://stackoverflow.com/users/13235540/martin-wcr">
        <FaStackOverflow />
      </a>
    </>
  );
};

export default NavLinks;
