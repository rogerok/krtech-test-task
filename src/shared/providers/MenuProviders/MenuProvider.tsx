import React, { useMemo, useState } from "react";
import { MenuContext } from "./MenuContext";

interface MenuProviderProps {
  children: React.ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const defaultProps = useMemo(() => ({ open, toggleOpen }), [open]);

  return (
    <MenuContext.Provider value={defaultProps}>{children}</MenuContext.Provider>
  );
};

export default MenuProvider;
