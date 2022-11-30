import React, { ButtonHTMLAttributes } from "react";
import * as S from "./style";

export type ButtonProps = {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant = "contained" }: ButtonProps) => (
  <S.Button variant={variant}>{children}</S.Button>
);
