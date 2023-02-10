import React, { useContext } from "react";
import { cn } from "@bem-react/classname";
import { MenuContext } from "../../shared/providers/MenuProviders/MenuContext";
import Avatar from "../../shared/ui/Avatar/Avatar";
import Nav from "../../components/Nav/Nav";
import Button from "../../shared/ui/Button/Button";
import avatar from "../../assets/images/avatar.png";
import { ReactComponent as OpenIcon } from "../../assets/icons/open-button.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-button.svg";
import "./Menu.styles.scss";

const Menu = () => {
  const menu = cn("Menu");
  const { open, toggleOpen } = useContext(MenuContext);

  return (
    <aside className={menu({ open })}>
      <Avatar firstName="Иван" lastName="Иванов" isOnline src={avatar} />
      <Nav />
      <p className={menu("ButtonContainer")}>
        <Button className={menu("Button")} onClick={toggleOpen}>
          {open ? <CloseIcon /> : <OpenIcon />}
        </Button>
      </p>
    </aside>
  );
};
export default Menu;
