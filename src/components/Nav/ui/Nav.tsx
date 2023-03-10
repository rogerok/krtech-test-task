import React from "react";
import { cn } from "@bem-react/classname";
import { observer } from "mobx-react-lite";
import { Badge } from "shared/ui/Badge/Badge";
import { contactsStore } from "shared/store/contacts.store";
import { ReactComponent as SettingsLogo } from "assets/icons/settings.svg";
import { ReactComponent as DialogsLogo } from "assets/icons/dialogs.svg";
import { kFormatter } from "shared/lib/kFormatter";
import { NavItem } from "./NavItem/NavItem";
import "./Nav.styles.scss";

export const Nav = observer(() => {
  const nav = cn("Nav");

  return (
    <nav className={nav()}>
      <NavItem
        path="/"
        Icon={DialogsLogo}
        Badge={Badge}
        unreadedMessages={kFormatter(contactsStore.totalUnreadedMessages)}
      >
        Диалоги
      </NavItem>
      <NavItem path="/settings" Icon={SettingsLogo}>
        Настройки
      </NavItem>
    </nav>
  );
});
