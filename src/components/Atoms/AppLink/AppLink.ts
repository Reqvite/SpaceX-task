import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

import { ThemeType } from "@/global";

interface AppLink extends LinkProps {
  width?: string;
  theme: ThemeType;
}

export const AppLink = styled(Link)<AppLink>`
color: #FFF;
font-family: 'Lato', sans-serif;
font-size: 16px;
font-weight: 500;
text-transform: uppercase;
`;
