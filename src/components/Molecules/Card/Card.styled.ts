import styled from "styled-components";

import { ThemeType } from "@/global";

type Theme = { theme: ThemeType };
export const CardContainer = styled.li<Theme>`
  max-width: 411px;
  width: 100%;
  height: 572px;
  background-color: ${({ theme }) => theme.colors.mainBgColorLight};
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
`;
export const CardContent = styled.div<Theme>`
  padding: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CardDescription = styled.p<Theme>`
  color: ${({ theme }) => theme.colors.secondaryColorDark};
  margin-top: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

export const Box = styled.div<Theme>`
  margin-top: 64px;
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;
