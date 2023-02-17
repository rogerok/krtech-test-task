import React, { useContext } from "react";
import { cn } from "@bem-react/classname";
import { Account } from "components/Account/ui/Account";
import { Nav } from "components/Nav/ui/Nav";
import { Button } from "shared/ui/Button/Button";
import { MenuContext } from "../../shared/providers/MenuProviders/MenuContext";
import { ReactComponent as OpenIcon } from "../../assets/icons/open-button.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-button.svg";
import "./Menu.styles.scss";

const Menu = () => {
  const menu = cn("Menu");
  const { open, toggleOpen } = useContext(MenuContext);

  return (
    /*  <div className=""> */
    <aside className={menu({ open })}>
      <Account />
      <Nav />
      <p className={menu("ButtonContainer")}>
        <Button className={menu("Button")} onClick={toggleOpen}>
          {open ? <CloseIcon /> : <OpenIcon />}
        </Button>
      </p>
    </aside>
    /*     </div> */
  );
};
export default Menu;
