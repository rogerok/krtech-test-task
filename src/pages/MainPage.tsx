import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../widgets/Menu/Menu";
import ContactsList from "../components/ContactsList/ContactsList";

const MainPage = () => (
  <>
    <Menu />
    <ContactsList />
    <Outlet />
  </>
);

export default MainPage;
