import React from "react";
import { cn } from "@bem-react/classname";
import "./Button.styles.scss";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  const button = cn("Button");

  return (
    <button className={button()} type="button">
      MenuButton
    </button>
  );
};

export default Button;
