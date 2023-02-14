import React from "react";
import { cn } from "@bem-react/classname";
import { Contact } from "components/Contact/ui/Contact";
import { Input } from "../../shared/ui/Input/Input";
import { usersData } from "../../shared/usersData";
import "./ContactList.styles.scss";

const ContactsList = () => {
  const contactList = cn("ContactsList");

  return (
    <section className={contactList()}>
      <h2 className="visually-hidden">Список чатов</h2>
      <form className={contactList("Form")}>
        <Input name="search user" placeholder="Поиск" type="text" />
      </form>
      <ul className={contactList("Contacts")}>
        {usersData.map(
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
    </section>
  );
};

export default ContactsList;
