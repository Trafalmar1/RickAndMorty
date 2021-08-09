import styled from "styled-components";

import { size } from "@utils/screenSizes";

const STable = styled.table`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: "Baloo Paaji 2", cursive;
  border-collapse: collapse;
  table-layout: fixed;
  max-width: 100rem;
  @media (max-width: ${size.mobile}) {
    font-size: 2.5rem;
  }
`;

export { STable };
