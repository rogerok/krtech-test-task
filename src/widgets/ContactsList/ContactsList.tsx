import React, { useState, useTransition } from "react";
import { cn } from "@bem-react/classname";
import { Contact } from "components/Contact/ui/Contact";
import { contactsStore } from "shared/store/contacts.store";
import { observer } from "mobx-react-lite";
import { Input } from "shared/ui/Input/Input";
import "./ContactList.styles.scss";

export const ContactsList = observer(() => {
  const contactList = cn("ContactsList");
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    startTransition(() => contactsStore.searchUser(e.target.value));
  };

  const contactsList = searchTerm
    ? contactsStore.searchResults
    : contactsStore.contactsData;

  const isNotFounded = searchTerm && !contactsStore.searchResults.length;

  return (
    <section className={contactList()}>
      <h2 className="visually-hidden">Список чатов</h2>
      <form className={contactList("Form")}>
        <Input
          id="search-user"
          name="search-user"
          placeholder="Поиск"
          type="text"
          onChange={onInputChange}
          value={searchTerm}
        />
      </form>
      {isNotFounded ? (
        <p className={contactList("Contacts", { empty: isNotFounded })}>
          Ничего не найдено
        </p>
      ) : (
        <ul className={contactList("Contacts")}>
          {contactsList.map(
            ({
              id,
              firstName,
              lastName,
              message,
              thumbnail,
              lastMessageDate,
              unreadedMessagesAmount,
              isOnline,
              isTyping,
            }) => (
              <Contact
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                message={message}
                thumbnail={thumbnail}
                lastMessageDate={lastMessageDate}
                unreadedMessagesAmount={unreadedMessagesAmount}
                isOnline={isOnline}
                isTyping={isTyping}
              />
            )
          )}
        </ul>
      )}
    </section>
  );
});
