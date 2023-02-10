import React from "react";
import { cn } from "@bem-react/classname";
import { BadgeProps } from "./Badge.types";
import "./Badge.styles.scss";

const Badge: React.FC<BadgeProps> = ({ content, className, color, size }) => {
  const badge = cn("Badge");
  return <span className={badge({ color, size }, [className])}>{content}</span>;
};

export default Badge;
