import styled from "styled-components";

import { size } from "@utils/screenSizes";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
`;

const Header = styled.header`
  margin-bottom: 5rem;
  grid-row: 1/2;
  grid-column: 2/3;
  @media (max-width: ${size.mobile}) {
    margin-bottom: 11vh;
  }
`;

const Section = styled.section`
  grid-row: 2/-1;
  grid-column: 2/3;
  padding: 0 4rem;
  @media (max-width: ${size.mobile}) {
    padding: 0 1.5rem;
  }
`;

export { Container, Header, Section };
