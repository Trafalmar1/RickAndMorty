import styled from "styled-components";

import { size } from "@utils/screenSizes";
import { colors } from "@utils/colors";

const Container = styled.div`
  display: flex;
  width: min-content;
  align-items: center;
`;

const CurrentPage = styled.p`
  display: block;
  font-size: 2rem;
  padding: 1rem 2rem;
  width: max-content;
  height: min-content;
  line-height: 1;
  margin: 0 4rem;
  @media (max-width: ${size.mobile}) {
    font-size: 3rem;
  }
`;

const ControlButton = styled.button`
  border: none;
  border-radius: 50%;
  border: 0.2rem solid black;
  background-color: transparent;

  width: 6rem;
  height: 6rem;

  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${colors.main};

  :hover,
  :active {
    border-color: ${colors.active};
    color: ${colors.active};
  }

  :focus {
    outline: none;
    box-shadow: none;
  }

  :disabled {
    border-color: ${colors.secondary};
    color: ${colors.secondary};
    :hover {
      cursor: auto;
    }
  }
  @media (max-width: ${size.mobile}) {
    font-size: 3rem;
    width: 8rem;
    height: 8rem;
  }
`;

export { Container, ControlButton, CurrentPage };
