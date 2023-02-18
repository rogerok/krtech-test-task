import React, { useEffect } from "react";
import { cn } from "@bem-react/classname";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { contactsStore } from "shared/store/contacts.store";
import { userStore } from "shared/store/user.store";

import { TypingIndicator } from "shared/ui/TypingIndicator/TypingIndicator";
import Message from "shared/ui/Message/Message";
import { Input } from "shared/ui/Input/Input";
import "./ChatPage.styles.scss";

export const ChatPage = observer(() => {
  const chatPage = cn("ChatPage");
  const { id } = useLocation().state;
  const { firstName, lastName, isTyping, lastMessageDate, message, dialog } =
    contactsStore.contactsData[id];
  const accountId = userStore.userData.id;

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
        {isTyping && <TypingIndicator />}
      </header>
      <div className={chatPage("Chat")} id="chat">
        {dialog.map(({ date, text, userId }, i) => {
          let newDay = false;
          const nextMsg = dialog[i + 1];
          if (nextMsg) {
            newDay =
              new Date(date).getDate() < new Date(nextMsg.date).getDate();
          }
          return (
            <Message
              key={date + text.length}
              className={chatPage("Message")}
              time={date}
              text={text}
              userId={userId}
              isMe={accountId === userId}
              newDay={newDay}
            />
          );
        })}
      </div>
      <form className={chatPage("Form")}>
        <Input
          id="send"
          name="sendMessage"
          placeholder="Написать сообщение..."
          type="text"
        />
      </form>
    </section>
  );
});
