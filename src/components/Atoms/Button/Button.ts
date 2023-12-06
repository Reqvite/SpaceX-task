import { ThemeType } from "@/global";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  theme: ThemeType;
}

export const Button = styled.button<ButtonProps>`
  display: block;
  height: 53px;
  width: ${({ width = 163 }) => `${width}px`};
  padding: ${({ theme }) => `${theme.spacing[3]} 0`};
  border: none;
  background: ${({ theme }) => theme.colors.accentColor};
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;
