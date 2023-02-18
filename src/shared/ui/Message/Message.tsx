import React from "react";
import { cn } from "@bem-react/classname";
import {
  formatHourMinutes,
  formatToRuDate,
  MonthType,
} from "shared/lib/formatDate";
import { BadgeSize, BadgeColor, Badge } from "shared/ui/Badge/Badge";

import "./Message.styles.scss";

interface MessageProps {
  time: string;
  text: string;
  userId: number;
  className?: string;
  isMe: boolean;
  newDay: boolean;
}

const Message: React.FC<MessageProps> = ({
  time,
  text,
  userId,
  className,
  newDay,
  isMe,
}) => {
  const message = cn("Message");
  const messageTime = formatHourMinutes(time);
  return (
    <>
      <div className={message({ isMe }, [className])}>
        <p className={message("Content")}>
          <span className={message("Text")}>{text}</span>
          <time
            className={message("Time", { inverted: isMe })}
            dateTime={messageTime}
          >
            {messageTime}
          </time>
        </p>
      </div>
      {newDay && (
        <Badge
          className={message("Badge")}
          size={BadgeSize.XL}
          color={BadgeColor.GREY}
          content={formatToRuDate(time, MonthType.STR)}
        />
      )}
    </>
  );
};

export default Message;
