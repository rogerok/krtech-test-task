import React from "react";
import { cn } from "@bem-react/classname";
import { BadgeProps } from "./Badge.types";
import "./Badge.styles.scss";

const Badge: React.FC<BadgeProps> = ({ content, className, color }) => {
  const badge = cn("Badge");
  return <span className={badge({ color }, [className])}>{content}</span>;
};

export default Badge;
