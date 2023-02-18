import React, { InputHTMLAttributes } from "react";
import { cn } from "@bem-react/classname";
import "./Input.styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const input = cn("Input");
  return <input className={input()} {...props} />;
};
