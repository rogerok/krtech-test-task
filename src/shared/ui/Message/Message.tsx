import React from "react";
import { cn } from "@bem-react/classname";
import { formatHourMinutes } from "shared/lib/formatDate";
import "./Message.styles.scss";

interface MessageProps {
  time: string;
  text: string;
  userId: number;
  className?: string;
}

const Message: React.FC<MessageProps> = ({ time, text, userId, className }) => {
  const message = cn("Message");
  const messageTime = formatHourMinutes(time);
  return (
    <p className={message({ inverted: true }, [className])}>
      <span className={message("Text")}>{text}</span>
      <time
        className={message("Time", { inverted: true })}
        dateTime={messageTime}
      >
        {messageTime}
      </time>
    </p>
  );
};

export default Message;
