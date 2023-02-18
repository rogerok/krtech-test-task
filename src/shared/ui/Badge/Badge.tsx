import React from "react";
import { cn } from "@bem-react/classname";
import "./Badge.styles.scss";

export enum BadgeColor {
  RED = "red",
  BLUE = "blue",
  GREY = "grey",
}

export enum BadgeSize {
  SM = "sm",
  LG = "lg",
  XL = "xl",
}

export interface BadgeProps {
  content: string | number;
  className?: string;
  color?: BadgeColor;
  size?: BadgeSize;
}

export const Badge: React.FC<BadgeProps> = ({
  content,
  className,
  color = BadgeColor.BLUE,
  size = BadgeSize.SM,
}) => {
  const badge = cn("Badge");
  return <span className={badge({ color, size }, [className])}>{content}</span>;
};
