// Import necessary modules from Styled Components
import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType; src: string; h?: number };
export const StyledSection = styled.section<Theme>`
  position: relative;

    padding-top: 30%;
    padding-bottom: 3%;
    height: auto;

  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
         padding-top: 20%;
    padding-bottom: 3%;
    height: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}) {
  padding-top: 181px;
  padding-bottom: 33px;
  height: ${({ h = 740 }) => `${h}px`};
  }
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
  color: #fff;
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;

export const UpperText = styled.span<Pick<Theme, "theme">>`
   font-size: 1rem;
  white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}) {
   font-size: 48px;
  }
`;

export const LowerText = styled.span`
  font-size: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 6rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      font-size: 310px;
  }
`;

export const Box = styled.div`
  position: absolute;
      top: 130%;
    left: 49%;
    transform: translate(0, -49%);

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            top: 111%;
    left: 48%;
    transform: translate(0, -48%);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.desk}) {
      top: 57%;
  left: 51%;
  transform: translate(-57%, -51%);
  }
`;

export const BottomText = styled.p<Pick<Theme, "theme">>`
  color: ${({ theme }) => theme.colors.whiteColor};
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Lato", sans-serif;
  font-size: ${({ theme }) => theme.spacing[8]};
  font-weight: 300;
`;

export const Flex = styled.div<Pick<Theme, "theme">>`
  margin-top: 132px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Anchor = styled.a<Pick<Theme, "theme">>`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  svg {
    transition: transform 0.3s ease-out;
  }
  &:hover svg {
    transform: translateY(4px);
  }
`;
