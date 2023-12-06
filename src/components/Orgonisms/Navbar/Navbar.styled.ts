// Import necessary modules from Styled Components
import { ThemeType } from "@/global";
import styled from "styled-components";

type Theme = { theme: ThemeType };
export const StyledHeader = styled.header<Theme>`
  background-color: ${({ theme }) => theme.colors.headerBg};
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
`;
