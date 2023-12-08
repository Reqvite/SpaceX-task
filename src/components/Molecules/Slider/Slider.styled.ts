import styled from "styled-components";

import { theme } from "@/global";

export const DotsContainer = styled.ul`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

type DotProps = {
  active: boolean;
  dotcolor?: string;
};

export const Dot = styled.li<DotProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: 2px solid ${({ dotcolor = theme.colors.whiteColor }) => dotcolor};
  border-radius: 50%;
  background: ${({ active, theme }) =>
        active
            ? `radial-gradient(circle, ${theme.colors.whiteColor} 40%, transparent 40%, transparent)`
            : "transparent"};
  margin: 0 5px;

  transition: background-color 0.3s ease, padding 0.3s ease;

  &:hover {
    background-color: ${({ dotcolor = theme.colors.whiteColor }) => dotcolor};
    padding: 2px;
  }
`;
