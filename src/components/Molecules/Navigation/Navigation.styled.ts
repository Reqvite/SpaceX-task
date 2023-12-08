// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType };
export const StyledNav = styled.nav<Theme>`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing[2]};
`;
export const StyledNavUl = styled.ul<Theme>`
  & a {
    font-size: ${({ theme }) => theme.spacing[3]};
  }
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & a {
      font-size: ${({ theme }) => theme.spacing[3]};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}) {
    & a {
      font-size: ${({ theme }) => theme.spacing[4]};
    }
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;
