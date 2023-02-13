import React from "react";
import { cn } from "@bem-react/classname";
import "./Badge.styles.scss";

export enum BadgeColor {
  RED = "red",
  BLUE = "blue",
}

export enum BadgeSize {
  SM = "sm",
  LG = "lg",
}

export interface BadgeProps {
  content: string | number;
  className?: string;
  color?: BadgeColor;
  size?: BadgeSize;
}

const Badge: React.FC<BadgeProps> = ({
  content,
  className,
  color = BadgeColor.BLUE,
  size = BadgeSize.SM,
}) => {
  const badge = cn("Badge");
  return <span className={badge({ color, size }, [className])}>{content}</span>;
};

export default Badge;
