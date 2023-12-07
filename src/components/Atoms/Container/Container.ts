import styled from "styled-components";

import { ThemeType } from "@/global";

interface ContainerProps {
  theme: ThemeType;
}

export const Container = styled.div<ContainerProps>`
  max-width: 1281px; 
  margin: 0 auto; 
`;
