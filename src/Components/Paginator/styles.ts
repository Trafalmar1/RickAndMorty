import styled from "styled-components";

import { size } from "@utils/screenSizes";
import { colors } from "@utils/colors";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  place-items: center;
  width: min-content;
  align-items: center;
  button:last-child {
    grid-column: 3/-1;
  }
`;

const CurrentPage = styled.p`
  display: block;
  font-size: 2rem;
  width: max-content;
  height: min-content;
  line-height: 1;
  grid-column: 2/3;
  @media (max-width: ${size.mobile}) {
    font-size: 3rem;
  }
`;

const ControlButton = styled.button`
  border: none;
  background-color: transparent;

  width: 6rem;
  height: 6rem;

  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px,
    rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset;

  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${colors.main};
  grid-column: 1/2;

  :hover,
  :active {
    border-color: ${colors.active};
  }

  :focus {
    outline: none;
  }

  :disabled {
    --disable: rgba(0, 0, 0, 0.1);
    border-color: var(--disable);
    color: var(--disable);
    box-shadow: var(--disable) 0px 2px 4px, var(--disable) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.05) 0px -3px 0px inset;
    :hover {
      cursor: auto;
    }
  }
  @media (max-width: ${size.mobile}) {
    font-size: 3rem;
    width: 10rem;
    height: 10rem;
  }
`;

export { Container, ControlButton, CurrentPage };
