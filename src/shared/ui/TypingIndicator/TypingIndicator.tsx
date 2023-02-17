import React from "react";
import { cn } from "@bem-react/classname";
import "./TypingIndicator.styles.scss";

interface TypingIndicatorProps {
  classname?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  classname,
}) => {
  const typingIndicator = cn("TypingIndicator");

  return (
    <div className={typingIndicator(undefined, [classname])}>
      <div className={typingIndicator("DotContainer")}>
        <div className={typingIndicator("Dot")} />
        <div className={typingIndicator("Dot")} />
        <div className={typingIndicator("Dot")} />
      </div>
      <span className={typingIndicator("Text")}>Печатает </span>
    </div>
  );
};
