import React from "react";
import { cn } from "@bem-react/classname";
import PresenceIndicator from "../PresenceIndicator/PresenceIndicator";
import "./Avatar.styles.scss";

interface AvatarProps {
  src: string;
  isOnline: boolean;
  firstName: string;
  lastName: string;
  size: "sm" | "lg";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  isOnline,
  src,
  className,
  size,
}) => {
  const avatar = cn("Avatar");

  return (
    <div className={avatar()}>
      <img
        className={avatar("Image", { size }, [className])}
        src={src}
        alt={`${firstName}${lastName}`}
      />
    </div>
  );
};

export default React.memo(Avatar);
