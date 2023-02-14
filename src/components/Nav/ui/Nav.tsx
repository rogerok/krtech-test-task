import React from "react";
import { cn } from "@bem-react/classname";
import { ReactComponent as DialogsLogo } from "assets/icons/dialogs.svg";
import { ReactComponent as SettingsLogo } from "assets/icons/settings.svg";
import { Badge } from "shared/ui/Badge/Badge";
import NavItem from "./NavItem/NavItem";
import { kFormatter } from "../../../shared/lib/kFormatter";
import "./Nav.styles.scss";

export const Nav = () => {
  const nav = cn("Nav");

  return (
    <nav className={nav()}>
      <NavItem
        path="/"
        Icon={DialogsLogo}
        Badge={Badge}
        unreadedMessages={kFormatter(12)}
      >
        Диалоги
      </NavItem>
      <NavItem path="/settings" Icon={SettingsLogo}>
        Настройки
      </NavItem>
    </nav>
  );
};
export const NavMemoized = React.memo(Nav);
