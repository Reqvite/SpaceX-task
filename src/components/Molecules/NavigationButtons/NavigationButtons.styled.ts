// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType };
export const Box = styled.div<Theme>`
  margin-left: auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  
`;
