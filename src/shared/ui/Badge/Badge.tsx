import React from "react";
import { cn } from "@bem-react/classname";
import "./Badge.styles.scss";
import { BadgeProps } from "./Badge.types";

/* interface BadgeProps {
  content?: string | number;
  isRed: boolean;
} */

const Badge: React.FC<BadgeProps> = ({ content, isRed, className }) => {
  const badge = cn("Badge");

  return (
    <span className={badge({ orange: isRed }, [className])}>{content}</span>
  );
};

export default Badge;
