import React, { useMemo } from "react";
import { cn } from "@bem-react/classname";
import { Link } from "react-router-dom";
import Avatar from "../../shared/ui/Avatar/Avatar";
import PresenceIndicator from "../../shared/ui/PresenceIndicator/PresenceIndicator";
import Badge, { BadgeSize } from "../../shared/ui/Badge/Badge";
import { reduceStringLength } from "../../shared/lib/reduceStringLength";
import { kFormatter } from "../../shared/lib/kFormatter";
import { UserData } from "../../shared/usersData";
import "./Contact.styles.scss";

const Contact: React.FC<UserData> = ({
  id,
  firstName,
  lastName,
  message,
  thumbnail,
  lastMessageDate,
  unreadedMessagesAmount,
  isTyping,
  isOnline,
}) => {
  const contact = cn("Contact");
  const date = new Date(lastMessageDate);
  const messageHour = date.getHours();
  const messageMinutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const messageTime = `${messageHour}:${messageMinutes}`;
  const unreadedMessages = useMemo(
    () => kFormatter(unreadedMessagesAmount),
    [unreadedMessagesAmount]
  );

  return (
    <li className={contact()}>
      <Link className={contact("Link")} to={id.toString()}>
        <section className={contact("Avatar")}>
          <Avatar
            className={contact("Img")}
            src={thumbnail!}
            firstName={firstName}
            lastName={lastName}
          />
          <PresenceIndicator
            isOnline={isOnline}
            className={contact("PresenceIndicator")}
          />
        </section>
        <section className={contact("Text")}>
          <p className={contact("Info")}>
            {firstName}&nbsp;
            {lastName}
          </p>
          <p className={contact("Message")}>
            {reduceStringLength(message.trim(), 25)}
          </p>
        </section>

        <Badge
          className={contact("Badge")}
          content={unreadedMessages}
          size={BadgeSize.LG}
        />
        <time className={contact("Time")} dateTime={messageTime}>
          {messageTime}
        </time>
      </Link>
    </li>
  );
};

export default Contact;
