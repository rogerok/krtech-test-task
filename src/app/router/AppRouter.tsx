import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig";
import { ChatPage } from "pages/ChatPage";
import { MainPage } from "pages/MainPage/MainPage";

const AppRouter = () => (
  <Routes>
    <Route path={RoutePath.main} element={<MainPage />}>
      <Route path={`${RoutePath.chat}/:id`} element={<ChatPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
