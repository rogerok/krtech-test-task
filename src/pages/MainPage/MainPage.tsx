import React, { useCallback, useEffect, useState, useTransition } from "react";
import { Outlet } from "react-router-dom";
import { ContactsList } from "widgets/ContactsList/ContactsList";
import { MenuProvider } from "shared/providers/MenuProviders/MenuProvider";
import { contactsStore } from "shared/store/contacts.store";
import { Input } from "shared/ui/Input/Input";
import { observer } from "mobx-react-lite";
import { cn } from "@bem-react/classname";
import Menu from "widgets/Menu/Menu";
import { generateNumbersRange } from "../../shared/lib/generateNumbersRange";
import "./MainPage.styles.scss";

export const MainPage = observer(() => {
  const mainPage = cn("MainPage");
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isPending, startTransition] = useTransition();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    startTransition(() => contactsStore.searchUser(e.target.value));
  };
  const contactsList = searchTerm
    ? contactsStore.searchResults
    : Object.values(contactsStore.contactsData);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = generateNumbersRange(1, contactsList.length);
      contactsStore.setUserTyping(randomId, true);

      const delay = (ms: number) =>
        // eslint-disable-next-line no-promise-executor-return
        new Promise((resolve) => setTimeout(resolve, ms));

      contactsStore.setUserOnline(randomId, true);
      delay(3000).then(() => {
        contactsStore.setUserTyping(randomId, false);
        contactsStore.increaseMessagesAmount(randomId);
        contactsStore.setUserOnline(randomId, false);
      });
      /*       const timer = setTimeout(() => {}, 5000); */
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className={mainPage()}>
      {/*    <div className={mainPage("Inner")}> */}
      <MenuProvider>
        <Menu />
      </MenuProvider>

      <div className={mainPage("ContactsList")}>
        <form className={mainPage("Form")}>
          <Input
            id="search-user"
            name="search-user"
            placeholder="Поиск"
            type="text"
            onChange={onInputChange}
          />
        </form>
        <ContactsList usersData={contactsList} />
      </div>
      {/*  </div> */}
      <Outlet />
    </div>
  );
});

export default MainPage;
