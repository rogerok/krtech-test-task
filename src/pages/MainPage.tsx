import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../widgets/Menu/Menu";
import ContactsList from "../widgets/ContactsList/ContactsList";
import MenuProvider from "../shared/providers/MenuProviders/MenuProvider";

const MainPage = () => (
  <>
    <MenuProvider>
      <Menu />
    </MenuProvider>
    <ContactsList />
    <Outlet />
  </>
);

export default MainPage;
