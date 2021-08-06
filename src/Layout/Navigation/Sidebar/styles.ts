import styled from "styled-components";

import { colors } from "@utils/colors";
import { sizes } from "@utils/sizes";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 10rem;
  box-sizing: border-box;
  position: absolute;
  top: ${sizes.burgerMenuHeight};
  height: calc(100vh - ${sizes.burgerMenuHeight});
  width: 100%;
  max-width: 100%;
  display: none;
  background-color: ${colors.main};
`;

export const Link = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 2rem 6rem;
  font-size: 4rem;
  font-weight: 700;
  &.active {
    p,
    div {
      color: ${colors.active};
    }
  }
  :hover {
    p,
    div {
      color: ${colors.active};
    }
  }
`;

export const IconContainer = styled.div`
  color: white;
  margin-right: 5rem;
  svg {
    font-size: 5rem;
  }
`;

export const Text = styled.p`
  color: white;
`;
