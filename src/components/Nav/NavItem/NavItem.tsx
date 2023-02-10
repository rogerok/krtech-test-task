import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@bem-react/classname";
import { BadgeProps } from "../../../shared/ui/Badge/Badge.types";
import "./NavItem.styles.scss";

interface NavItemProps {
  children: React.ReactNode;
  path: string;
  Icon: React.ElementType;
  Badge?: React.ElementType<BadgeProps>;
  unreadedMessages?: number | string;
}

const NavItem: React.FC<NavItemProps> = ({
  path,
  Icon,
  Badge,
  unreadedMessages,
  children,
}) => {
  const nav = cn("Nav");

  return (
    <NavLink
      className={({ isActive }) => nav("Item", { active: isActive })}
      to={path}
    >
      <Icon />
      <span className={nav("ItemText")}>{children}</span>
      {Badge && unreadedMessages && (
        <Badge
          className={nav("Badge")}
          content={unreadedMessages}
          color="red"
        />
      )}
    </NavLink>
  );
};

export default NavItem;
