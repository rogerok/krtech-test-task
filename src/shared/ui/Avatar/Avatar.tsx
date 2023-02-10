import React from "react";
import { cn } from "@bem-react/classname";
import StatusIndicator from "../PresenceIndicator/PresenceIndicator";
import "./Avatar.styles.scss";

interface AvatarProps {
  src: string;
  isOnline: boolean;
  firstName: string;
  lastName: string;
}

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  isOnline,
  src,
}) => {
  const avatar = cn("Avatar");

  return (
    <div className={avatar()}>
      <img
        className={avatar("Image")}
        src={src}
        alt={`${firstName}${lastName}`}
      />
      <p className={avatar("Username")}>
        <span>{firstName}&nbsp;</span>
        <span>{lastName}</span>
      </p>
      <StatusIndicator />
    </div>
  );
};

export default Avatar;
