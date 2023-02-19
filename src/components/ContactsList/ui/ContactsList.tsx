import React from "react";
import { cn } from "@bem-react/classname";
import { observer } from "mobx-react-lite";
import { Contact } from "components/Contact";
import { UserData } from "shared/data";
import "./ContactList.styles.scss";

interface ContactListProps {
  usersData: UserData[];
}

export const ContactsList: React.FC<ContactListProps> = observer(
  ({ usersData }) => {
    const contactList = cn("ContactsList");
    const isNotFounded = !usersData.length;

    return (
      <section className={contactList()}>
        <h3 className="visually-hidden">Список чатов</h3>
        {isNotFounded ? (
          <p className={contactList("Contacts", { empty: isNotFounded })}>
            Ничего не найдено
          </p>
        ) : (
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
                dialog,
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
                  dialog={dialog}
                />
              )
            )}
          </ul>
        )}
      </section>
    );
  }
);
