import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig";
import { ChatPage } from "pages/ChatPage/ChatPage";
import { MainPage } from "pages/MainPage/MainPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const AppRouter = () => (
  <Routes>
    <Route path={RoutePath.main} element={<MainPage />}>
      <Route path={`${RoutePath.chat}/:id`} element={<ChatPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
