import React, { useEffect, useState, useTransition } from "react";
import { cn } from "@bem-react/classname";
import { observer } from "mobx-react-lite";
import { ContactsList } from "components/ContactsList";
import { Menu } from "components/Menu";
import { MenuProvider } from "shared/providers/MenuProviders/MenuProvider";
import { Input } from "shared/ui/Input/Input";
import { Outlet } from "react-router-dom";
import { contactsStore } from "shared/store/contacts.store";
import { generateRandomNumber } from "shared/lib/generateRandomNumber";
import { generateArrayOfNumbers } from "shared/lib/generateArrayOfNumbers";
import { delay } from "shared/lib/delay";
import "./MainPage.styles.scss";

export const MainPage = observer(() => {
  const mainPage = cn("MainPage");
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const {
    setUserOnline,
    setUserTyping,
    increaseMessagesAmount,
    updateLastMessageDate,
    searchUser,
    sortedContacts,
    searchResults,
  } = contactsStore;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    startTransition(() => searchUser(e.target.value));
  };

  const contactsList = searchTerm ? searchResults : sortedContacts;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUsersQuantity = generateRandomNumber(1, 2);
      const arrayOfNumbers = generateArrayOfNumbers(randomUsersQuantity);

      arrayOfNumbers.forEach((_) => {
        const randomDelay1 = generateRandomNumber(1000, 3000);
        const randomDelay2 = generateRandomNumber(1000, 10000);
        const randomId = generateRandomNumber(1, contactsList.length);
        const willSendMessage = Boolean(generateRandomNumber(1, 10) >= 1);

        delay(randomDelay1).then(() => {
          setUserOnline(randomId, true);
          if (willSendMessage) setUserTyping(randomId, true);
        });

        delay(randomDelay2).then(() => {
          setUserTyping(randomId, false);
          if (willSendMessage) {
            increaseMessagesAmount(randomId);
            updateLastMessageDate(new Date(), randomId);
            setUserOnline(randomId, false);
          } else {
            setUserOnline(randomId, false);
          }
        });
      });
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className={mainPage()}>
      <MenuProvider>
        <Menu />
      </MenuProvider>

      <div className={mainPage("ContactsList")}>
        <form className={mainPage("Form")}>
          <Input
            name="searchUser"
            placeholder="Поиск"
            type="text"
            onChange={onInputChange}
          />
        </form>
        <ContactsList usersData={contactsList} />
      </div>
      <Outlet />
    </div>
  );
});

export default MainPage;
