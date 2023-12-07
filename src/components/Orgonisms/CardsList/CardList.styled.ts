import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = {
    theme: ThemeType;
    width?: number;
    translateX?: string;
    isActive?: boolean;
}
export const CardListContainer = styled.section`
padding-top: 96px;
padding-bottom: 96px;

`;
export const CardList = styled.ul<Theme>`
overflow: hidden;
flex-wrap: nowrap;
width: 100%;
  display: flex;
width: ${({ width }) => `${width}%`};
  gap: ${({ theme }) => `${theme.spacing[6]}`};
  list-style: none;
  padding: 0;
  margin: 0;
  transform: ${({ translateX }) => `translateX(${translateX})`};
  transition: transform 0.5s
`;
export const CardTitle = styled.ul`
font-size: 32px;
font-weight: 800;
text-transform: uppercase;
`;

export const TopBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 43px;
`;

export const ButtonsBox = styled.div<Theme>`
display: flex;
gap: ${({ theme }) => `${theme.spacing[4]}`};
`;

export const Box = styled.div`
  position: absolute;
    bottom: -60px;
  left: 50%;
  transform: translate(0, -50%);
`;

export const BoxRelative = styled.div`
 position: relative;
`;

export const Dotlist = styled.ul<Theme>`
margin-top: ${({ theme }) => `${theme.spacing[10]}`};
display: flex;
gap: ${({ theme }) => `${theme.spacing[2]}`};
justify-content: center;
`;
export const Dot = styled.li<Theme>`
  cursor: pointer;
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.blackColor};
  background: ${({ isActive, theme }) =>
        isActive ? `radial-gradient(circle, ${theme.colors.blackColor} 40%, white 40%, white)` : 'transparent'};
  padding: 1px;

    transition: background-color 0.3s ease, padding 0.3s ease;

    &:hover {
    background-color: ${({ theme }) => theme.colors.blackColor};
    padding: 2px;
  }
`;
