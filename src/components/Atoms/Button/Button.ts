import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { ThemeType } from "@/global";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  bg?: string;
  theme: ThemeType;
  clear?: boolean;
  iconBtn?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height = 53 }) => `${height}px`};
  width: ${({ width = 163 }) => `${width}px`};
  padding: ${({ theme }) => `${theme.spacing[3]} 0`};
  border: none;
  background: ${({ theme, bg }) => bg || theme.colors.accentColor};
  cursor: pointer;
  font-size: ${({ theme }) => `${theme.spacing[6]}`};
  font-weight: 600;
  text-transform: uppercase;
  transform: scale(1);

  &:active {
    transform: scale(0.98);
  }

  ${({ iconBtn }) =>
        iconBtn &&
    css`
      &:hover,
      &:focus {
        background: ${({ theme }) => theme.colors.purpleColor};

        svg {
          fill: white;
          stroke: white;
        }
      }
    `}

  ${({ clear }) =>
        clear &&
    css`
      width: 100%;
      padding: 0;
      background: none;
      color: ${({ theme }) => theme.colors.secondaryColorDark};
      font-family: Lato;
      font-size: ${({ theme }) => `${theme.spacing[6]}`};
      font-weight: 300;
      text-transform: none;
    `}


  transition: background 500ms cubic-bezier(0.075, 0.82, 0.165, 1), transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
