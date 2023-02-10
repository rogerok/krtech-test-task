import React, { useContext, useState } from "react";
import { cn } from "@bem-react/classname";
import NavItem from "./NavItem/NavItem";
import Badge from "../../shared/ui/Badge/Badge";
import { ReactComponent as DialogsLogo } from "../../assets/icons/dialogs.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";
import "./Nav.styles.scss";
import { MenuContext } from "../../shared/providers/MenuProviders/MenuContext";

interface NavProps {
  open: boolean;
}

const Nav = () => {
  const nav = cn("Nav");
  const { open } = useContext(MenuContext);
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

export default React.memo(Nav);
