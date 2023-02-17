import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@bem-react/classname";
import { BadgeColor, BadgeProps, BadgeSize } from "shared/ui/Badge/Badge";
import { MenuContext } from "shared/providers/MenuProviders/MenuContext";
import { visuallyHidden } from "shared/lib/visuallyHidden";
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
  const { open } = useContext(MenuContext);
  const badgeSize = open ? BadgeSize.LG : BadgeSize.SM;

  return (
    <NavLink
      className={({ isActive }) => nav("Item", { active: isActive })}
      to={path}
    >
      <Icon />
      <span
        className={nav(
          "Text",
          {
            open,
          },
          [visuallyHidden(open)]
        )}
      >
        {children}
      </span>
      {Badge && unreadedMessages && (
        <Badge
          className={nav("Badge", { open })}
          content={unreadedMessages}
          color={BadgeColor.RED}
          size={badgeSize}
        />
      )}
    </NavLink>
  );
};

export default React.memo(NavItem);
