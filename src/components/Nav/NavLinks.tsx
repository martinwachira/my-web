import { Route, Switch } from "react-router-dom";

import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import React from "react";
import Work from "../Work";

const NavLinks: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default NavLinks;
