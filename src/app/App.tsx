import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ChatPage from "../pages/ChatPage";
import "./App.styles.scss";

const App = () => (
  <main className="App">
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="chat" element={<ChatPage />} />
      </Route>
    </Routes>
  </main>
);

export default App;
