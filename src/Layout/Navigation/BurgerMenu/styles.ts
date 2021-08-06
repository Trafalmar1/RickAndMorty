import styled from "styled-components";

import { sizes } from "@utils/sizes";
import { colors } from "@utils/colors";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: ${sizes.burgerMenuHeight};
  z-index: 999;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  width: 100%;
  height: 100%;

  background-color: ${colors.main};
`;

export const Title = styled.h1`
  color: #fff;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-family: "Baloo Paaji 2", cursive;
`;
