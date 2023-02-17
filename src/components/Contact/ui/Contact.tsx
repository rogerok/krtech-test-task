import React, { useMemo } from "react";
import { cn } from "@bem-react/classname";
import { Link, useMatch } from "react-router-dom";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { TypingIndicator } from "shared/ui/TypingIndicator/TypingIndicator";
import { RoutePath } from "shared/config/routeConfig";
import { observer } from "mobx-react-lite";
import { contactsStore } from "shared/store/contacts.store";
import { PresenceIndicator } from "../../../shared/ui/PresenceIndicator/PresenceIndicator";
import { Badge, BadgeSize } from "../../../shared/ui/Badge/Badge";
import { reduceStringLength } from "../../../shared/lib/reduceStringLength";
import { kFormatter } from "../../../shared/lib/kFormatter";
import { UserData } from "../../../shared/data";
import "./Contact.styles.scss";

export const Contact: React.FC<UserData> =
  /* React.memo( */
  observer(
    ({
      id,
      firstName,
      lastName,
      message,
      thumbnail,
      lastMessageDate,
      unreadedMessagesAmount,
      isTyping,
      isOnline,
    }: UserData) => {
      const contact = cn("Contact");
      const isActive = Boolean(useMatch(`${RoutePath.chat}/${id}`));
      const date = new Date(lastMessageDate);
      const messageHour = date.getHours();
      const messageMinutes =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      const messageTime = `${messageHour}:${messageMinutes}`;
      const unreadedMessages = useMemo(
        () => kFormatter(unreadedMessagesAmount),
        [unreadedMessagesAmount]
      );

      if (id === 1) {
        console.log(
          contactsStore.contactsData[id].isTyping,
          contactsStore.contactsData[id].unreadedMessagesAmount
        );
      }

      return (
        <li className={contact()}>
          <Link
            className={contact("Link", { active: isActive })}
            to={`${RoutePath.chat}/${id}`}
          >
            <section>
              <Avatar
                className={contact("Img")}
                src={thumbnail!}
                firstName={firstName}
                lastName={lastName}
              />
              {isOnline && (
                <PresenceIndicator
                  isOnline={isOnline}
                  className={contact("PresenceIndicator")}
                />
              )}
            </section>
            <section className={contact("Text")}>
              <p className={contact("Info")}>
                {firstName}&nbsp;
                {lastName}
              </p>
              {isTyping ? (
                <TypingIndicator classname={contact("TypingIndicator")} />
              ) : (
                <p className={contact("Message")}>
                  {reduceStringLength(message.trim(), 25)}
                </p>
              )}
            </section>
            {!!unreadedMessages && (
              <Badge
                className={contact("Badge")}
                content={unreadedMessages}
                size={BadgeSize.LG}
              />
            )}
            <time className={contact("Time")} dateTime={messageTime}>
              {messageTime}
            </time>
          </Link>
        </li>
      );
    }
  );
/* ); */
