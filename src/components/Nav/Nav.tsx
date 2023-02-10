import React from "react";
import { cn } from "@bem-react/classname";
import NavItem from "./NavItem/NavItem";
import Badge from "../../shared/ui/Badge/Badge";
import { ReactComponent as DialogsLogo } from "../../assets/icons/dialogs.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";
import "./Nav.styles.scss";

const Nav = () => {
  const unreadedMessages = 192;

  const nav = cn("Nav");
  return (
    <nav className={nav()}>
      <NavItem path="/" Icon={DialogsLogo} Badge={Badge} unreadedMessages={192}>
        Диалоги
      </NavItem>
      <NavItem path="/settings" Icon={SettingsLogo}>
        Настройки
      </NavItem>
    </nav>
  );
};

export default Nav;
