import React, { useEffect } from "react";
import { cn } from "@bem-react/classname";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { contactsStore } from "shared/store/contacts.store";
import { TypingIndicator } from "shared/ui/TypingIndicator/TypingIndicator";
import { formatHourMinutes } from "shared/lib/formatDate";
import Message from "shared/ui/Message/Message";
import "./ChatPage.styles.scss";

export const ChatPage = observer(() => {
  const chatPage = cn("ChatPage");
  const { id } = useLocation().state;
  const { firstName, lastName, isTyping, lastMessageDate, message, dialog } =
    contactsStore.contactsData[id];

  useEffect(() => {
    contactsStore.clearUnreadedMessages(id);
  }, [contactsStore.contactsData[id].unreadedMessagesAmount]);
  return (
    <section className={chatPage()}>
      <header className={chatPage("Header")}>
        <h3 className="visually-hidden">Чат с пользователем</h3>
        <h3 className={chatPage("UserName")}>
          {firstName}&nbsp;
          {lastName}
        </h3>
        <TypingIndicator />
      </header>
      <div className={chatPage("Chat")}>
        {dialog.map(({ date, text, userId }, i) => (
          <Message
            key={date + text.length}
            className={chatPage("Message")}
            time={date}
            text={text}
            userId={userId}
          />
        ))}
      </div>
    </section>
  );
});
