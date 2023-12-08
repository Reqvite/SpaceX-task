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

export const BurgerIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
`;

export const BurgerMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 60px;  
  right: 10px;
  background-color:  ${({ theme }) => theme.colors.headerBg};
  padding: 20px;
  z-index: 999;
`;
