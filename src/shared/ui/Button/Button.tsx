import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@bem-react/classname";
import "./Button.styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  const button = cn("Button");

  return (
    <button
      className={button(undefined, [className])}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
