import React from "react";
import { cn } from "@bem-react/classname";
import NavItem from "./NavItem/NavItem";
import { ReactComponent as DialogsLogo } from "../../assets/icons/dialogs.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";

import "./Nav.styles.scss";

const Nav = () => {
  const nav = cn("Nav");
  return (
    <nav className={nav()}>
      <NavItem path="/" Icon={DialogsLogo}>
        Диалоги
      </NavItem>
      <NavItem path="/settings" Icon={SettingsLogo}>
        Настройки
      </NavItem>
    </nav>
  );
};

export default Nav;
