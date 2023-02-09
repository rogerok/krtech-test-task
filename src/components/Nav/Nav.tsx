import React from "react";
import { cn } from "@bem-react/classname";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const nav = cn("Nav");
  return (
    <nav className={nav()}>
      <NavItem />
    </nav>
  );
};

export default Nav;
