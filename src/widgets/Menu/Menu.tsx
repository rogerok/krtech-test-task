import React from "react";
import Avatar from "../../shared/ui/Avatar/Avatar";
import avatar from "../../assets/images/avatar.png";
import "./Menu.styles.scss";
import Nav from "../../components/Nav/Nav";
import Button from "../../shared/ui/Button/Button";

const Menu = () => (
  <aside className="Menu">
    <Avatar firstName="Иван" lastName="Иванов" isOnline src={avatar} />
    <Nav />
    <Button />
  </aside>
);
export default Menu;
