import React, { useMemo } from "react";
import { cn } from "@bem-react/classname";
import { generateRandomHsla } from "../../lib/generateRandomColor";
import "./Avatar.styles.scss";

export enum AvatarSize {
  SM = "sm",
  LG = "lg",
}

interface AvatarProps {
  src?: string;
  firstName: string;
  lastName?: string;
  size?: AvatarSize;
  className?: string;
}

export const Avatar = React.memo(
  ({
    firstName,
    lastName,
    src,
    className,
    size = AvatarSize.SM,
  }: AvatarProps) => {
    const avatar = cn("Avatar");

    const randomColor = useMemo(
      () => generateRandomHsla(360, 100, 30, 0.7),
      [src]
    );

    const nameAbbreviation = `${firstName.charAt(0)}${
      lastName && lastName.charAt(0)
    }`;

    return (
      <div className={avatar({ size }, [className])}>
        {src && (
          <img
            className={avatar("Image")}
            src={src}
            alt={`${firstName}${lastName}`}
          />
        )}
        {!src && (
          <div
            className={avatar("Placeholder")}
            style={{ background: randomColor }}
          >
            {nameAbbreviation}
          </div>
        )}
      </div>
    );
  }
);
