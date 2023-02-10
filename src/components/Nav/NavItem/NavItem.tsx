import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@bem-react/classname";
import "./NavItem.styles.scss";

interface NavItemProps {
  children: React.ReactNode;
  path: string;
  Icon: React.ElementType;
}

const NavItem: React.FC<NavItemProps> = ({ path, Icon, children }) => {
  const navItem = cn("Nav", "Item");
  return (
    <NavLink
      className={({ isActive }) => navItem({ active: isActive })}
      to={path}
    >
      <Icon />
      {children}
    </NavLink>
  );
};

export default NavItem;
