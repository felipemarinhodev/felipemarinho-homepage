import { darken, lighten } from "polished";
import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const wrapperModifiers = {
  contained: () => css`
    border: none;
    background: red;
    color: white;
    &:hover {
      background: ${darken(0.1, "#FF0000")};
    }
  `,
  outlined: () => css`
    border: 1px solid red;
    background: none;
    color: red;
    &:hover {
      background: ${lighten(0.1, "#DCDCDC")};
    }
  `,
  text: () => css`
    background: none;
    border: none;
    color: red;
    &:hover {
      background: ${lighten(0.1, "#DCDCDC")};
    }
  `,
  small: () => css`
    height: 2rem;
    font-size: 1rem;
  `,
  medium: () => css`
    height: 3rem;
    font-size: 1.2rem;
    padding: 0.6rem 2.8rem;
  `,
  large: () => css`
    height: 4rem;
    font-size: 1.4rem;
    padding: 0.6rem 3.6rem;
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ variant, size }) => css`
    border-radius: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;

    cursor: pointer;

    ${!!variant && wrapperModifiers[variant]}
    ${!!size && wrapperModifiers[size]}
  `}
`;
