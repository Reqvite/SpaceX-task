// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType };
export const StyledNav = styled.nav<Theme>`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing[2]};
`;
export const StyledNavUl = styled.ul<Theme>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
`;
