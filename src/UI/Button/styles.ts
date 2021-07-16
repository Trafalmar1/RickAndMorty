import styled from "styled-components";
import { darken } from "polished";

import { colors } from "@utils/colors";

const SButton = styled.button`
  display: block;

  padding: 0.4em 2em;

  border: 0.2rem solid black;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transition: transform 0.1s;
    transform: translateY(0.2rem);
  }

  :hover {
    border-color: ${darken(0.05, colors.active)};
    color: ${darken(0.05, colors.active)};
  }

  font-size: 2rem;
  font-weight: 500;
  font-family: "Baloo Paaji 2";
`;

export { SButton };
