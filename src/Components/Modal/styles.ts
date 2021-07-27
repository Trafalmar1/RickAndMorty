import styled from "styled-components";

import { colors } from "@utils/colors";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
`;

const Backdrop = styled.div`
  position: inherit;
  height: 100%;
  width: 100%;

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1;
`;

const StyledModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  left: 0;
  right: 0;
  margin: 0 auto;
  top: 15rem;

  padding: 5rem;

  max-width: min-content;

  @media (max-width: 650px) {
    max-width: calc(100% - 4rem);
  }

  background-color: ${colors.main};
  z-index: 2;
`;

export { Backdrop, ModalWrapper, StyledModal };
