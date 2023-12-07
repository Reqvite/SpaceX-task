import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { ThemeType } from "@/global";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  bg?: string;
  theme: ThemeType;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height = 53 }) => `${height}px`};;
  width: ${({ width = 163 }) => `${width}px`};
  padding: ${({ theme }) => `${theme.spacing[3]} 0`};
  border: none;
  background: ${({ theme, bg }) => bg || theme.colors.accentColor};
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;
