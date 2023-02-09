import React from "react";
import { cn } from "@bem-react/classname";

const NavItem = () => {
  const nav = cn("Nav");

  return <li className={nav("Item")}>NavItem</li>;
};

export default NavItem;
