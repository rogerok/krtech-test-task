import React from "react";
import { cn } from "@bem-react/classname";
import "./Avatar.styles.scss";

export enum AvatarSize {
  SM = "sm",
  LG = "lg",
}

interface AvatarProps {
  src: string;
  firstName: string;
  lastName?: string;
  size?: AvatarSize;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  firstName,
  lastName,
  src,
  className,
  size = AvatarSize.SM,
}) => {
  const avatar = cn("Avatar");
  return (
    <div className={avatar({ size }, [className])}>
      <img
        className={avatar("Image")}
        src={src}
        alt={`${firstName}${lastName}`}
      />
    </div>
  );
};

export default React.memo(Avatar);
