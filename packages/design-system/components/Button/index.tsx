import React, { ButtonHTMLAttributes } from "react";
import * as S from "./style";

export type ButtonProps = {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
  size: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "contained",
  size = "medium",
}: ButtonProps) => (
  <S.Button variant={variant} size={size}>
    {children}
  </S.Button>
);
