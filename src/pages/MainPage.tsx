import React from "react";
import { Outlet } from "react-router-dom";
import { ContactsList } from "widgets/ContactsList/ContactsList";
import { MenuProvider } from "shared/providers/MenuProviders/MenuProvider";
import Menu from "../widgets/Menu/Menu";

export const MainPage = () => (
  <>
    <MenuProvider>
      <Menu />
    </MenuProvider>
    <ContactsList />
    <Outlet />
  </>
);

export default MainPage;
