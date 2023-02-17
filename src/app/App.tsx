import React, { useEffect, useLayoutEffect } from "react";
import { contactsStore } from "shared/store/contacts.store";
import { observer } from "mobx-react-lite";
import AppRouter from "./router/AppRouter";
import "./App.styles.scss";

const App = observer(() => {
  const {
    increaseMessagesAmount,
    setUserTyping: toggleIsUserTyping,
    contactsData,
  } = contactsStore;

  return (
    <main className="App">
      <AppRouter />
    </main>
  );
});

export default App;
