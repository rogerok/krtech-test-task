import React from "react";
import Menu from "../widgets/Menu/Menu";
import "./App.styles.scss";

const App = () => (
  <main className="App">
    <Menu />
    <div className="ContactsList">contacts-list</div>
    <div className="Chat">Chat</div>
  </main>
);

export default App;
