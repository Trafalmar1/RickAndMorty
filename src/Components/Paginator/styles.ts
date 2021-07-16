import styled from "styled-components";
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

  :hover {
    border-color: ${colors.active};
    color: ${colors.active};
  }
`;

export { Container, ControlButton, CurrentPage };
