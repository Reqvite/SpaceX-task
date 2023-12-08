import { LinkProps, NavLink } from "react-router-dom";
import styled from "styled-components";

import { ThemeType } from "@/global";

interface AppLink extends LinkProps {
  width?: string;
  theme: ThemeType;
}

export const AppLink = styled(NavLink)<AppLink>`
  position: relative;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 2px;
    background: white;
    transform: scaleX(0);
    transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &.active::after {
    transform: ${({ to }) => (to === "/" ? "scaleX(1)" : "scaleX(0)")};
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;
