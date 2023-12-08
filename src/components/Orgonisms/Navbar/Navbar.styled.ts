// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType };
export const StyledHeader = styled.header<Theme>`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbarHeight};

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBg};
  color: #fff;
  padding: 20px;
  text-align: center;
`;
