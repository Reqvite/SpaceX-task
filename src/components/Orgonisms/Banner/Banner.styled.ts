// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType, src: string };
export const StyledSection = styled.section<Theme>`
  padding-top: 181px;
  padding-bottom: 33px;
position: relative;
height: 740px;
width: 100%;
 background-image: ${({ src }) => `url(${src})`};background-position: center;
background-size: cover; background-repeat: no-repeat;
`;

export const RelativeBox = styled.div`
  position: relative;
`;

export const Title = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
line-height: 1;
align-items: center;
color: #FFF;
text-align: center;
font-weight: 800;
text-transform: uppercase;

`;

export const UpperText = styled.span`
font-size: 48px;
white-space: nowrap;
`;

export const LowerText = styled.span`
  font-size: 310px;
`;


export const Box = styled.div`
  position: absolute;
  top: 57%;
  left:51%;
  transform: translate(-57%, -51%);
`;

export const BottomText = styled.p<Omit<Theme, "src">>`
    margin-top: 132px;
color: ${({theme}) => theme.colors.whiteColor};
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: 'Lato', sans-serif;
font-size: ${({theme}) => theme.spacing[8]};
font-weight: 300;
`;

export const Flex = styled.div<Omit<Theme, "src">>`
  display: flex; 
  align-items: baseline;
  justify-content: center;
  gap: ${({theme}) => theme.spacing[2]};
`;



