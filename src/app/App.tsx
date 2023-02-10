import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./App.styles.scss";

const App = () => (
  <main className="App">
    <AppRouter />
  </main>
);

export default App;
