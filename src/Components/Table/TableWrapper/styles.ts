import styled from "styled-components";

import { size } from "@utils/screenSizes";

const TWrapper = styled.div`
  display: grid;
  place-items: center;
  @media (max-width: ${size.mobile}) {
    overflow-x: scroll;
    width: calc(100vw - 4rem);
  }
`;

export { TWrapper };
