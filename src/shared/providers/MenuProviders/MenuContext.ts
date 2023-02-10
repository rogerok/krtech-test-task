import { createContext } from "react";

export interface MenuContextProps {
  open?: boolean;
  toggleOpen?: () => void;
}
export const MenuContext = createContext<MenuContextProps>({});
